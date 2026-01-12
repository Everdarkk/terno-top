'use client'

import { useState } from 'react'
import styles from "../../styles/AdminArticles.module.css"
import { deleteArticle } from '@/actions/administration/actions'
import ArticleForm from './ArticleForm'
import { useRouter } from 'next/navigation'
import DeleteIcon from "./DeleteIcon"
import EditIcon from "./EditIcon"

export default function AdminArticles({ articles }: { articles: any[] }) {
  const router = useRouter()
  const [openId, setOpenId] = useState<string | null>(null)

  const toggleEdit = (id: string) => {
    setOpenId(prev => (prev === id ? null : id))
  }

  return (
    <div className={styles.container}>
      {/* NEW ARTICLE */}
      <div className={styles.newWrap}>
        <h6>Нова стаття</h6>
        <ArticleForm />
      </div>

      {/* ARTICLES LIST */}
      <ul className={styles.listWrap}>
        {articles.map(article => {
          const isOpen = openId === article.id

          return (
            <li key={article.id} className={styles.articleWrap}>
              {/* HEADER */}
              <div className={styles.mainWrap}>
                <h5>{article.title}</h5>

                <div className={styles.actions}>
                  {/* EDIT */}
                  <button
                    className={`${styles.iconButton} ${styles.edit}`}
                    onClick={() => toggleEdit(article.id)}
                    aria-label="Редагувати статтю"
                  >
                    <EditIcon />
                  </button>

                  {/* DELETE */}
                  <button
                    className={`${styles.iconButton} ${styles.delete}`}
                    onClick={async () => {
                      await deleteArticle(article.id)
                      router.refresh()
                    }}
                    aria-label="Видалити статтю"
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>

              {/* EDIT FORM */}
              {isOpen && (
                <div className={styles.editorWrap}>
                  <ArticleForm article={article} />
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
