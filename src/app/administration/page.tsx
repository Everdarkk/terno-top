import styles from "../../styles/AdminPage.module.css"
import { createClient } from '@/lib/supabase/server'
import AdminArticles from '@/components/ui/AdminArticles'
import Image from "next/image"
import LogoutButton from "@/components/ui/LogoutButton"

export default async function AdministrationPage() {
  const supabase = await createClient()

  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <section className={styles.container}>
        {/* IMAGE */}
        <Image
          src={'/images/pics/history-3.webp'}
          alt={'Адміністрація'}
          width={2000}
          height={1000}
          className={styles.image}
        />
      <div className={styles.content}>
        <div className={styles.mainWrap}>
          <h1>Керування статтями</h1>
          <LogoutButton />
        </div>
        <AdminArticles articles={articles ?? []} />
      </div>
    </section>
  )
}
