import styles from "../../styles/AdminPage.module.css"
import { createClient } from '@/lib/supabase/server'
import AdminArticles from '@/components/ui/AdminArticles'

export default async function AdministrationPage() {
  const supabase = await createClient()

  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <section className={styles.container}>
      <h1>Керування статтями</h1>
      <AdminArticles articles={articles ?? []} />
    </section>
  )
}
