import styles from "../styles/AboutStaff.module.css"
import { overpass } from "@/app/fonts"

export default function AboutStaff() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                {/* TITLE */}
                <div className={`${styles.title} ${overpass.className}`}>
                    <h3>
                        Наша команда фахівців
                    </h3>

                    {/* LINE */}
                    <span className={styles.line}></span>
                </div>
            </div>
        </section>
    )
}