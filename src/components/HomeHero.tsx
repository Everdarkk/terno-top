import styles from "../styles/HomeHero.module.css"
import { overpass, geologica } from "@/app/layout"
import VideoBg from "./ui/VideoBg"
import Link from "next/link"

export default function HomeHero() {
    return (
        <section className={styles.container}>
            {/* VIDEO */}
            <VideoBg src="/videos/video-1.webm"/>
            {/* CONTENT */}
            <div className={styles.content}>
                {/* HEADER */}
                <div className={styles.headerWrap}>
                    <div className={styles.text}>
                        <h1 className={`${overpass.className}`}>
                            Протезування, ортопедичне взуття та засоби реабілітації <span style={{whiteSpace: 'nowrap'}}>у Тернополі</span>
                        </h1>
                        <p className={`${geologica.className}`}>
                            індивідуальний підхід, гарантія якості, вже 10 років працюємо для Вас!
                        </p>
                    </div>

                    {/* BUTTON */}
                    <Link href={'/form'}>
                        <button className={`${geologica.className} ${styles.btn}`}>
                            Замовити
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    )
}