import styles from "../../styles/PerkCard.module.css"
import Image from "next/image";

export default function PerkCard({ title, imgUrl }: { title: string; imgUrl: string }) {
    return (
        <div className={styles.container}>
            <Image
                src={imgUrl}
                alt="Значок переваги"
                width={100}
                height={100}
                className={styles.icon}
            />

            <p>
                {title}
            </p>
        </div>
    )
}