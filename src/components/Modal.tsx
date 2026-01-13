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

    // KEYBOARD SCROLL LOCK
    if (
      e.key === 'ArrowDown' ||
      e.key === 'ArrowUp' ||
      e.key === 'PageDown' ||
      e.key === 'PageUp' ||
      e.key === 'Home' ||
      e.key === 'End' ||
      e.key === ' '
    ) {
      e.preventDefault()
    }
  }

  const preventScroll = (e: Event) => {
    e.preventDefault()
  }

  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('wheel', preventScroll, { passive: false })
  window.addEventListener('touchmove', preventScroll, { passive: false })

  return () => {
    window.removeEventListener('keydown', onKeyDown)
    window.removeEventListener('wheel', preventScroll)
    window.removeEventListener('touchmove', preventScroll)
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
