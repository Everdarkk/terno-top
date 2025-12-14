import styles from "../styles/HomeHero.module.css"
import { overpass, geologica } from "@/app/layout"

export default function HomeHero() {
    return (
        <section className={styles.container}>
            {/* VIDEO */}
            <div className={styles.videoWrap}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className={styles.video}
                > 
                <source src="/videos/video-1.webm" type="video/webm" />
                </video>
            </div>
            {/* CONTENT */}
            <div className={styles.content}>
                {/* HEADER */}
                <div className={styles.headerWrap}>
                    <div className={styles.text}>
                        <h1 className={`${overpass.className}`}>
                            Протезування, ортопедичне взуття та засоби реабілітації у Тернополі
                        </h1>
                        <h3 className={`${geologica.className}`}>
                            індивідуальний підхід, гарантія якості, вже 10 років працюємо для Вас!
                        </h3>
                    </div>

                    {/* BUTTON */}
                    <button className={`${geologica.className} ${styles.btn}`}>
                        Замовити
                    </button>
                </div>

            </div>
        </section>
    )
}