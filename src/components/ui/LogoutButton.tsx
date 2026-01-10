'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import styles from '../../styles/LogoutButton.module.css'

export default function LogoutButton() {
  const supabase = createClient()
  const router = useRouter()

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/administration/login')
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      className={styles.logout}
      aria-label="Вийти з адмін-панелі"
    >
        <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            aria-hidden="true"
        >
            <path
                d="M9 6V4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3 12h10m0 0-3-3m3 3-3 3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </button>
  )
}
