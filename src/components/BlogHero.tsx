import styles from "../styles/BlogHero.module.css"
import { overpass } from "@/app/layout"
import VideoBg from "./ui/VideoBg"

export default function BlogHero() {
    return (
        <section className={styles.container}>
            {/* VIDEO */}
            <VideoBg src="/videos/video-5.webm"/>
            {/* CONTENT */}
            <div className={styles.content}>
                {/* HEADER */}
                <div className={styles.headerWrap}>
                    <div className={styles.text}>
                        <h1 className={`${overpass.className}`}>
                            блог ортопедичного центру Терно-Топ: експертні поради про здоров&apos;я ніг та хребта
                        </h1>
                        <p>
                            читайте останні дослідження, поради наших ортопедів та рекомендації щодо вибору ортопедичного взуття, устілок та засобів реабілітації.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}