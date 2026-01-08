import Image from "next/image"
import styles from "../../styles/BlogList.module.css"
import { createClient } from '@/lib/supabase/server'
import Link from "next/link"
import { overpass } from "@/app/layout"

export default async function BlogList() {
  const supabase = await createClient()

  const { data: articles, error } = await supabase
    .from('articles')
    .select('id, title, article, created_at, imgUrl')
    .order('created_at', { ascending: false })

  if (error) {
    console.error(error)
    return <p className={styles.error}>Не вдалося завантажити статті</p>
  }


  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* TITLE */}
                <div className={`${styles.title} ${overpass.className}`}>
                    <h3>
                        Список усіх публікацій
                    </h3>

                    {/* LINE */}
                    <span className={styles.line}></span>
                </div>

        {/* LIST OF ARTICLES */}
        <ul className={styles.articlesList}>
          {articles?.map(article => (
            <li key={article.id} className={styles.card}>
                {/* IMAGE */}
                <div className={styles.imageWrap}>
                  <Image
                    src={article.imgUrl}
                    alt={article.title}
                    width={1000}
                    height={1000}
                    className={styles.image}
                  />
                </div>
                
                {/* TEXT WRAP */}
                <div className={styles.textWrap}>
                  {/* ARTICLE TITLE */}
                  <h2 className={overpass.className}>{article.title}</h2>
                  {/* ARTICLE TEXT */}
                  <p>{article.article}</p>
                </div>
        
                {/* TIME */}
                <time className={styles.time}>
                  {new Date(article.created_at).toLocaleDateString()}
                </time>

                {/* READ BUTTON */}
                <Link href={`/blog/${article.id}`}>
                  <button className={styles.btn}>
                    Читати
                  </button>
                </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

