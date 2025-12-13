"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/Navbar.module.css"
import { geologica, tektur, unbounded } from "@/app/layout"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navList = [
    { title: "Продукція", path: "/products" },
    { title: "Клієнтам", path: "/clients" },
    { title: "Про нас", path: "/about" },
    { title: "Блог", path: "/blog" },
    { title: "Контакти", path: "/contacts" },
  ]

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) return

      const currentScrollY = window.scrollY

      if (currentScrollY < 80) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, isOpen])

  return (
    <nav
      className={`${styles.navbar} ${
        !isVisible ? styles.hidden : ""
      }`}
    >
      <div className={styles.logoBtnWrap}>
          {/* LOGO */}
          <div className={styles.logoWrap}>
            <Link href="/home" onClick={closeMenu}>
              <Image
                src="/images/utils/logo.png"
                alt="Терно-Топ"
                width={100}
                height={100}
                className={styles.image}
                priority
              />
            </Link>
            <div className={styles.titleWrap}>
              <h3 className={`${tektur.className} ${styles.title}`}>
                Терно-Топ
              </h3>
              <p className={`${unbounded.className} ${styles.text}`}>
                ортопедичний центр
              </p>
            </div>
          </div>
          {/* BURGER */}
          <button
            className={styles.burger}
            onClick={() => setIsOpen(prev => !prev)}
            aria-label="Меню"
            aria-expanded={isOpen}
          >
            <Image
              src={
                isOpen
                  ? "/images/utils/close.png"
                  : "/images/utils/menu.png"
              }
              alt="Menu"
              width={32}
              height={32}
            />
          </button>
      </div>

      {/* MENU */}
      <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
        {navList.map(item => (
          <li key={item.title}>
            <Link
              href={item.path}
              onClick={closeMenu}
              className={`${geologica.className} ${styles.link}`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
