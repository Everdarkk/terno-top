import styles from "../styles/ClientsFaq.module.css"
import { overpass } from "@/app/layout"

export default function ClientsFaq() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                {/* TITLE */}
                <div className={`${styles.title} ${overpass.className}`}>
                    <h3>
                        Поширені запитання (FAQ)
                    </h3>

                    {/* LINE */}
                    <span className={styles.line}></span>
                </div>
            </div>
            
        </section>
    )
}