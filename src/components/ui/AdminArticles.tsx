'use client'

import { deleteArticle } from '@/app/administration/actions'
import ArticleForm from './ArticleForm'

export default function AdminArticles({ articles }: { articles: any[] }) {
  return (
    <>
      <ArticleForm />

      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <strong>{article.title}</strong>

            <button onClick={() => deleteArticle(article.id)}>
              Видалити
            </button>

            <ArticleForm article={article} />
          </li>
        ))}
      </ul>
    </>
  )
}
