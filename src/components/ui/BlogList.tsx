import Image from "next/image"
import styles from "../../styles/BlogList.module.css"
import { createClient } from '@/lib/supabase/server'
import Link from "next/link"

export default async function BlogList() {
  const supabase = await createClient()

  const { data: articles, error } = await supabase
    .from('articles')
    .select('id, title, created_at, imgUrl')
    .order('created_at', { ascending: false })

  if (error) {
    console.error(error)
    return <p>Не вдалося завантажити статті</p>
  }


  return (
    <section className={styles.container}>
      <ul>
        {articles?.map(article => (
          <li key={article.id}>
              <Image
                src={article.imgUrl}
                alt={article.title}
                width={1000}
                height={1000}
                className={styles.image}
              />

              <h2>{article.title}</h2>
              
              <time>
                {new Date(article.created_at).toLocaleDateString()}
              </time>

              <Link href={`/blog/${article.id}`}>
                <button>
                  Читати
                </button>
              </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

