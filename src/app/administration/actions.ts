'use server'

import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { revalidatePath } from 'next/cache'

// EDIT ARTICLE
export async function upsertArticle(data: {
  id?: string
  title: string
  article: string
  imgUrl: string
}) {
  const supabase = await createClient()

  const payload = {
    id: data.id,
    title: data.title,
    article: data.article,
    imgUrl: data.imgUrl,
  }

  const { error } = await supabase
    .from('articles')
    .upsert(payload, {
      onConflict: 'id',
    })

  if (error) {
    console.error('UPSERT ERROR:', error)
    throw new Error('Не вдалося зберегти статтю')
  }

  revalidatePath('/administration')
  revalidatePath('/blog')
}


// STORAGE EXTRACT
function extractStoragePath(publicUrl: string) {
  const marker = '/storage/v1/object/public/TernoTop/'
  const index = publicUrl.indexOf(marker)
  if (index === -1) return null
  return publicUrl.slice(index + marker.length)
}

// DELETE ARTICLE
export async function deleteArticle(id: string) {
  const supabase = await createClient()
  const admin = createAdminClient()

  // ARTICLE FETCH
  const { data: article, error } = await supabase
    .from('articles')
    .select('imgUrl')
    .eq('id', id)
    .single()

  if (error) throw error

  // SERVICE ROLE DELETION FROM STORAGE
  if (article?.imgUrl) {
    const filePath = extractStoragePath(article.imgUrl)

    if (filePath) {
      const { error: storageError } = await admin.storage
        .from('TernoTop')
        .remove([filePath])

      if (storageError) {
        console.error('STORAGE DELETE ERROR:', storageError)
      }
    }
  }

  // ARTICLE DELETION
  const { error: deleteError } = await supabase
    .from('articles')
    .delete()
    .eq('id', id)

  if (deleteError) throw deleteError

  revalidatePath('/administration')
  revalidatePath('/blog')
}

// BUCKET
const BUCKET = 'TernoTop'


// IMAGE LIST
export async function getImages() {
  const admin = createAdminClient()

  const { data, error } = await admin.storage
    .from(BUCKET)
    .list('', {
      limit: 100,
      sortBy: { column: 'created_at', order: 'desc' },
    })

  if (error) {
    console.error(error)
    throw new Error('Не вдалося отримати зображення')
  }

  return data ?? []
}

// REMOVE IMAGE
export async function removeImage(path: string) {
  const admin = createAdminClient()

  const { error } = await admin.storage
    .from(BUCKET)
    .remove([path])

  if (error) {
    console.error(error)
    throw new Error('Не вдалося видалити зображення')
  }

  revalidatePath('/administration')
}