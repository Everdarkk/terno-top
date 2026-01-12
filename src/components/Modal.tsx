'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import styles from '../styles/Modal.module.css'

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  // ESC + lock scroll
  useEffect(() => {
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') router.back()
  }

  const html = document.documentElement
  const body = document.body

  const scrollY = window.scrollY

  // save styles
  const originalHtmlOverflow = html.style.overflow
  const originalBodyPosition = body.style.position
  const originalBodyTop = body.style.top
  const originalBodyWidth = body.style.width

  // lock scroll but keep scrollbar
  html.style.overflow = 'hidden'
  body.style.position = 'fixed'
  body.style.top = `-${scrollY}px`
  body.style.width = '100%'

  window.addEventListener('keydown', onKeyDown)

  return () => {
    window.removeEventListener('keydown', onKeyDown)

    html.style.overflow = originalHtmlOverflow
    body.style.position = originalBodyPosition
    body.style.top = originalBodyTop
    body.style.width = originalBodyWidth

    window.scrollTo(0, scrollY)
  }
}, [router])



  return (
    <div className={styles.container} onClick={() => router.back()}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
