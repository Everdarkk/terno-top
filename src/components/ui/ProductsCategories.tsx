'use client'

import { useState, useEffect, useRef } from 'react'
import styles from '../../styles/ProductsCategories.module.css'
import { overpass } from '@/app/layout'
import { categories } from '@/lib/data/categories'
import { Category } from '@/lib/types'
import Image from 'next/image'

export default function ProductsCategories() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null)
  const [isLeaving, setIsLeaving] = useState(false)

  const detailsRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (activeCategory && detailsRef.current) {
      detailsRef.current.focus({ preventScroll: false })
    }
  }, [activeCategory])

  const handleOpen = (category: Category) => {
    setIsLeaving(true)

    setTimeout(() => {
      setActiveCategory(category)
      setIsLeaving(false)
    }, 300)
  }

  const handleBack = () => {
    setIsLeaving(true)

    setTimeout(() => {
      setActiveCategory(null)
      setIsLeaving(false)
      requestAnimationFrame(() => {
        gridRef.current?.focus()
      })
    }, 300)
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* TITLE */}
        <header className={`${styles.title} ${overpass.className}`}>
          <h3>Пропонуємо наші товари</h3>
          <span className={styles.line}></span>
        </header>

        {/* BODY */}
        <div className={styles.body}>

          {/* IF NOT ACTIVE - SHOW CATEGORIES GRID */}
          {!activeCategory ? (
            <div
              ref={gridRef}
              tabIndex={-1}
              className={`
                ${styles.grid}
                ${styles.gridEnter}
                ${isLeaving ? styles.gridExit : ''}
              `}
            >
              {categories.map((category, index) => (
                // WRAPPER FOR ANIMATION APPEAR
                <div
                  key={category.id}
                  className={styles.cardWrapper}
                  style={{
                    animationDelay: `${index * 80}ms`,
                  }}
                >
                  {/* CARD */}
                  <button
                    className={styles.card}
                    style={{
                      backgroundImage: `url(${category.imageUrl})`,
                    }}
                    onClick={() => handleOpen(category)}
                  >
                    <div className={styles.overlay} />
                    <span className={styles.cardTitle}>
                      {category.title}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            // IF ACTIVE - SHOW CATEGORY DETAILS
            <div
              ref={detailsRef}
              tabIndex={-1}
              className={`
                ${styles.details}
                ${styles.detailsEnter}
                ${isLeaving ? styles.detailsExit : ''}
              `}
            >
              <button
                className={styles.backBtn}
                onClick={handleBack}
              >
                ← Назад до категорій
              </button>

              <Image
                src={activeCategory.imageUrl}
                alt={activeCategory.title}
                width={1600}
                height={900}
                className={styles.detailsImage}
                priority
              />

              <h4 className={styles.detailsTitle}>
                {activeCategory.title}
              </h4>

              <p className={styles.detailsText}>
                {activeCategory.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}