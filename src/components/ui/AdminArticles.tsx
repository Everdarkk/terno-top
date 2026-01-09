'use client'

import { deleteArticle } from '@/app/administration/actions'
import ArticleForm from './ArticleForm'
import { useRouter } from 'next/navigation'

export default function AdminArticles({ articles }: { articles: any[] }) {
  const router = useRouter()

  return (
    <>
      <ArticleForm />

      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <strong>{article.title}</strong>

            <button onClick={async () => {
                await deleteArticle(article.id)
                router.refresh()
              }}
            >
              Видалити
            </button>

            <ArticleForm article={article} />
          </li>
        ))}
      </ul>
    </>
  )
}
