'use client'

import { useState } from 'react'
import styles from "../../styles/ProductsCategories.module.css"
import { overpass } from "@/app/layout"
import { categories } from '@/lib/data/categories'
import { Category } from '@/lib/types'

export default function ProductsCategories() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null)

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* TITLE */}
        <div className={`${styles.title} ${overpass.className}`}>
          <h3>Пропонуємо наші товари</h3>
          <span className={styles.line}></span>
        </div>

        {/* BODY */}
        <div className={styles.body}>
          {!activeCategory ? (
            <div className={styles.categoriesGrid}>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={styles.categoryCard}
                  onClick={() => setActiveCategory(category)}
                >
                  {category.title}
                </button>
              ))}
            </div>
          ) : (
            <div className={styles.categoryDetails}>
              <button
                className={styles.backBtn}
                onClick={() => setActiveCategory(null)}
              >
                ← Назад до категорій
              </button>

              <h4>{activeCategory.title}</h4>
              <p>{activeCategory.description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
