'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { upsertArticle } from '@/app/administration/actions'
import { useRouter } from 'next/navigation'

export default function ArticleForm({ article }: { article?: any }) {
  const supabase = createClient()
  const router = useRouter()

  const [title, setTitle] = useState(article?.title ?? '')
  const [text, setText] = useState(article?.article ?? '')
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    let imgUrl = article?.imgUrl ?? ''

    // IMAGE UPLOAD
    if (file) {
      const fileExt = file.name.split('.').pop()
      const fileName = `${crypto.randomUUID()}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from('TernoTop')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false,
        })

      if (uploadError) {
        alert('Помилка завантаження фото')
        setLoading(false)
        return
      }

      // PUBLIC URL
      const { data } = supabase.storage
        .from('TernoTop')
        .getPublicUrl(fileName)

      imgUrl = data.publicUrl
    }

    // ARTICLE SAVE
    await upsertArticle({
      id: article?.id,
      title,
      article: text,
      imgUrl,
    })

    router.refresh()
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Заголовок"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Текст статті"
        value={text}
        onChange={e => setText(e.target.value)}
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={e => setFile(e.target.files?.[0] ?? null)}
      />

      <button type="submit" disabled={loading}>
        {loading ? 'Збереження...' : article ? 'Оновити' : 'Додати'}
      </button>
    </form>
  )
}
