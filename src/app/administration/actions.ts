'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

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
      onConflict: 'id', // ❗ КЛЮЧОВИЙ ФІКС
    })

  if (error) {
    console.error('UPSERT ERROR:', error)
    throw new Error('Не вдалося зберегти статтю')
  }

  revalidatePath('/administration')
  revalidatePath('/blog')
}

export async function deleteArticle(id: string) {
  const supabase = await createClient()

  const { error } = await supabase
    .from('articles')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('DELETE ERROR:', error)
    throw new Error('Не вдалося видалити статтю')
  }

  revalidatePath('/administration')
  revalidatePath('/blog')
}
