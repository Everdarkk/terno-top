import styles from "../styles/AboutHero.module.css"
import { overpass } from "@/app/layout"
import VideoBg from "./ui/VideoBg"

export default function AboutHero() {
    return (
        <section className={styles.container}>
            {/* VIDEO */}
            <VideoBg src="/videos/video-4.webm"/>
            {/* CONTENT */}
            <div className={styles.content}>
                {/* HEADER */}
                <div className={styles.headerWrap}>
                    <div className={styles.text}>
                        <h1 className={`${overpass.className}`}>
                            Знайомство з командою професіоналів
                        </h1>
                        <p>
                            Терно-Топ: експертна команда ортопедів у Тернополі. Дізнайтеся про наш підхід до індивідуального виготовлення ортопедичних виробів та устілок.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}