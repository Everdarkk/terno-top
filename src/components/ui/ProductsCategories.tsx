'use client'

import { useState, useEffect, useRef } from 'react'
import styles from '../../styles/ProductsCategories.module.css'
import { overpass } from '@/app/fonts'
import { categories } from '@/lib/data/categories'
import { Category } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'

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
        <div className={`${styles.title} ${overpass.className}`}>
          <h3>
            Пропонуємо наші основні категорії товарів
          </h3>

          {/* LINE */}
          <span className={styles.line}></span>
        </div>

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


        {/* DOWNLOAD LINK */}
        <Link 
          href="/catalog/ternotop.pdf" 
          className={`${styles.link} ${overpass.className}`}
          download='catalog.pdf'
          target='_blank'
          rel="noopener noreferrer"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 16L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8 12L12 16L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>

          Завантажити детальний каталог продукції (PDF)
        </Link>
      </div>
    </section>
  )
}