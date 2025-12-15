import styles from "../styles/HomeConsulting.module.css"
import { overpass, geologica } from "@/app/layout"

export default function HomeConsulting() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                {/* TITLE */}
                <h3 className={`${styles.title} ${overpass.className}`}>
                    Експертна консультація в нашому центрі
                </h3>
                {/* MAIN INFO */}
                <div className={styles.infoWrap}>
                </div>
                {/* SIGN BUTTON */}
                <button className={`${geologica.className} ${styles.btn}`}>
                    Записатись
                </button>
            </div>

        </section>
    )
}