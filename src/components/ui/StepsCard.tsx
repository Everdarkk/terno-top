import styles from "../../styles/StepsCard.module.css"
import { StepCard } from "@/lib/types"
import Image from "next/image"

export default function StepsCard({ id, title, iconUrl, children}: StepCard) {
    return (
        <article className={styles.container}>
            {/* TITLE SIDE */}
            <div className={styles.titleWrap}>
                {/* ICON */}
                <Image 
                    src={iconUrl}
                    alt={title}
                    width={500}
                    height={500}
                    className={styles.icon}
                />

                {/* TITLE */}
                <div className={styles.title}>
                    <p>
                        Крок {id}:
                    </p>

                    <h4>
                        {title}
                    </h4>
                </div>
            </div>

            {/* TEXT SIDE */}
            <div className={styles.textWrap}>
                {children}
            </div>
        </article>
    )
}