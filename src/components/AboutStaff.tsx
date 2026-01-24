import styles from "../styles/AboutStaff.module.css"
import { overpass } from "@/app/fonts"
import StaffCard from "./ui/StaffCard"
import { ceo, ceoText } from "@/lib/data/ceo"

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

                {/* CEO PRESENTATION */}
                <div className={styles.ceoWrap}>
                    {/* CARD */}
                    <StaffCard
                        staff={ceo}
                    />
                    {/* TEXT */}
                    <div className={styles.ceoText}>
                        {ceoText.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))} 
                    </div>
                </div>
            </div>
        </section>
    )
}