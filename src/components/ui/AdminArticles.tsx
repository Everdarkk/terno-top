'use client'

import styles from "../../styles/AdminArticles.module.css"
import { deleteArticle } from '@/app/administration/actions'
import ArticleForm from './ArticleForm'
import { useRouter } from 'next/navigation'

export default function AdminArticles({ articles }: { articles: any[] }) {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.newWrap}>
        <h6>Нова стаття</h6>
        <ArticleForm />
      </div>

      <ul className={styles.listWrap}>
        {articles.map(article => (
          <li key={article.id} className={styles.articleWrap}>
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
    </div>
  )
}
