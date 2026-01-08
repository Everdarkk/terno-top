'use client'

import styles from "../../../styles/LoginPage.module.css"
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const supabase = createClient()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError('Невірний логін або пароль')
      return
    }

    router.push('/administration')
  }

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <h1>Адмін-панель</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />

      {error && <p>{error}</p>}

      <button type="submit">Увійти</button>
    </form>
  )
}
