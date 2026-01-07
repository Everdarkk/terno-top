import { createClient } from '@/lib/supabase/server'

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
    <article>
      <h1>{article.title}</h1>
      <time>{new Date(article.created_at).toLocaleDateString()}</time>
      <div>{article.article}</div>
    </article>
  )
}
