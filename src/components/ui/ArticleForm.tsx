'use client'

import { useState } from 'react'
import { upsertArticle } from '@/app/administration/actions'
import { useRouter } from 'next/navigation'

export default function ArticleForm({ article }: { article?: any }) {
  const [title, setTitle] = useState(article?.title ?? '')
  const [text, setText] = useState(article?.article ?? '')
  const [imgUrl, setImgUrl] = useState(article?.imgUrl ?? '')
  
  // ROUTER
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    await upsertArticle({
      id: article?.id,
      title,
      article: text,
      imgUrl,
    })

    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Заголовок"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Текст статті"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <input
        placeholder="URL зображення"
        value={imgUrl}
        onChange={e => setImgUrl(e.target.value)}
      />

      <button type="submit">
        {article ? 'Оновити' : 'Додати'}
      </button>
    </form>
  )
}
