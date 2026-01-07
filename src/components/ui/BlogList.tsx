import styles from "../../styles/BlogList.module.css"
import { createClient } from '@/lib/supabase/server'

export default async function BlogList() {
  const supabase = await createClient()

  const { data: articles, error } = await supabase
    .from('articles')
    .select('id, title, created_at')
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
            <a href={`/blog/${article.id}`}>
              <h2>{article.title}</h2>
              <time>
                {new Date(article.created_at).toLocaleDateString()}
              </time>
              <button>
                Читати
              </button>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

