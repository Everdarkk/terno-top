import styles from "../styles/ContactsHero.module.css"
import { overpass } from "@/app/fonts"
import VideoBg from "./ui/VideoBg"

export default function ContactsHero() {
    return (
        <section className={styles.container}>
            {/* VIDEO */}
            <VideoBg src="/videos/video-3.webm"/>
            {/* CONTENT */}
            <div className={styles.content}>
                {/* HEADER */}
                <div className={styles.headerWrap}>
                    <div className={styles.text}>
                        <h1 className={`${overpass.className}`}>
                            Зв&apos;яжіться з нами
                        </h1>
                        <p>
                            ми надамо всю необхідну та корисну для Вас інформацію!
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}