'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { upsertArticle } from '@/actions/administration/actions'
import { useRouter } from 'next/navigation'
import styles from '../../styles/ArticleForm.module.css'

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

  if (file) {
    const fileExt = file.name.split('.').pop()
    const fileName = `${crypto.randomUUID()}.${fileExt}`

    const { error } = await supabase.storage
      .from('TernoTop')
      .upload(fileName, file)

    if (error) {
      alert('Помилка завантаження фото')
      setLoading(false)
      return
    }

    const { data } = supabase.storage
      .from('TernoTop')
      .getPublicUrl(fileName)

    imgUrl = data.publicUrl
  }

  await upsertArticle({
    id: article?.id,
    title,
    article: text,
    imgUrl,
  })

  // RESET ONLY FOR "NEW ARTICLE"
  if (!article) {
    setTitle('')
    setText('')
    setFile(null)
  }

  router.refresh()
  setLoading(false)
}


  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* TITLE */}
      <div className={styles.field}>
        <label>Заголовок</label>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>

      {/* TEXT */}
      <div className={styles.field}>
        <label>Текст статті</label>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          rows={6}
          required
        />
      </div>

      {/* IMAGE UPLOAD */}
      {!article && <div className={styles.field}>
        <label>Зображення</label>
        <input
          type="file"
          accept="image/*"
          onChange={e => setFile(e.target.files?.[0] ?? null)}
        />
      </div>}

      {/* BUTTON */}
      <div className={styles.footer}>
        <button
          type="submit"
          disabled={loading}
          className={styles.submit}
        >
          {loading ? 'Збереження…' : article ? 'Оновити статтю' : 'Додати статтю'}
        </button>
      </div>
    </form>
  )
}
