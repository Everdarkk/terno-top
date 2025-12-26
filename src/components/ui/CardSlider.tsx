"use client"

import { ReactNode, useRef, useEffect } from "react"
import styles from "../../styles/CardSlider.module.css"

type Props = {
  children: ReactNode[]
}

export default function CardSlider({ children }: Props) {
  const sliderRef = useRef<HTMLDivElement>(null)

  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const velocity = useRef(0)
  const lastX = useRef(0)
  const raf = useRef<number | null>(null)

  /* ================= DRAG ================= */
  const startDrag = (pageX: number) => {
    if (!sliderRef.current) return
    isDown.current = true
    sliderRef.current.classList.add(styles.paused)
    startX.current = pageX
    lastX.current = pageX
    scrollLeft.current = sliderRef.current.scrollLeft
  }

  const onMove = (pageX: number) => {
    if (!isDown.current || !sliderRef.current) return
    const walk = (pageX - startX.current) * 1.1
    sliderRef.current.scrollLeft = scrollLeft.current - walk
    velocity.current = pageX - lastX.current
    lastX.current = pageX
  }

  const endDrag = () => {
    if (!sliderRef.current) return
    isDown.current = false
    sliderRef.current.classList.remove(styles.paused)
    momentum()
  }

  /* ================= MOMENTUM ================= */
  const momentum = () => {
    if (!sliderRef.current) return
    velocity.current *= 0.95
    sliderRef.current.scrollLeft -= velocity.current

    if (Math.abs(velocity.current) > 0.5) {
      raf.current = requestAnimationFrame(momentum)
    } else {
      cancelAnimationFrame(raf.current!)
    }
  }

  /* ================= EVENTS ================= */
  const onMouseDown = (e: React.MouseEvent) => startDrag(e.pageX)
  const onMouseMove = (e: React.MouseEvent) => onMove(e.pageX)
  const onMouseUp = endDrag
  const onMouseLeave = endDrag

  const onTouchStart = (e: React.TouchEvent) =>
    startDrag(e.touches[0].pageX)

  const onTouchMove = (e: React.TouchEvent) =>
    onMove(e.touches[0].pageX)

  const onTouchEnd = endDrag

  /* ================= INFINITE FIX ================= */
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const onScroll = () => {
      const maxScroll = slider.scrollWidth / 2
      if (slider.scrollLeft >= maxScroll) {
        slider.scrollLeft -= maxScroll
      }
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft += maxScroll
      }
    }

    slider.addEventListener("scroll", onScroll)
    return () => slider.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />

      <div
        ref={sliderRef}
        className={styles.slider}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className={styles.track}>
          {[...children, ...children].map((child, index) => (
            <div className={styles.cardWrapper} key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
