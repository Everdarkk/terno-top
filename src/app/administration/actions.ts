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

  await supabase.from('articles').upsert(data)

  revalidatePath('/administration')
  revalidatePath('/blog')
}

export async function deleteArticle(id: string) {
  const supabase = await createClient()

  await supabase.from('articles').delete().eq('id', id)

  revalidatePath('/administration')
  revalidatePath('/blog')
}
