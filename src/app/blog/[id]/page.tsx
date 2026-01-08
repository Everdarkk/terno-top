import styles from "../../../styles/ArticlePage.module.css"
import { createClient } from '@/lib/supabase/server'
import Image from "next/image"

export default async function ArticlePage(props: {
  params: Promise<{ id: string }>
}) {
  const { id } = await props.params

  const supabase = await createClient()

  const { data: article, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', id)
    .maybeSingle()

  if (error) {
    console.error(error)
    return <p>Помилка завантаження статті</p>
  }

  if (!article) {
    return <p>Статтю не знайдено</p>
  }

  return (
    <section className={styles.container}>
      {/* IMAGE */}
      <Image
        src={article.imgUrl}
        alt={article.title}
        width={2000}
        height={1000}
        className={styles.image}
      />

      {/* ARTICLE */}
      <div className={styles.content}>
        <article className={styles.article}>
          <h1>{article.title}</h1>
          <p>{article.article}</p>
          <time>{new Date(article.created_at).toLocaleDateString()}</time>
        </article>
      </div>
    </section>
  )
}