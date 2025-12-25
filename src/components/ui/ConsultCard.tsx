import styles from "../../styles/ConsultCard.module.css"
import Image from "next/image"

export default function ConsultCard({title, text, imgSrc, side}: {title: string, text: string, imgSrc: string, side: 'left' | 'right' }) {

    return (
        <article className={`${styles.container} ${side === 'left' ? styles.leftSide : styles.rightSide}`}>
            <div className={styles.imageWrap}>
                <Image
                    src={imgSrc}
                    alt={title}
                    width={100}
                    height={100}
                    className={styles.image}
                />
            </div>

            <div className={`${styles.content} ${side === 'left' ? styles.contentLeft : styles.contentRight}`}>
                <h5>
                    {title}
                </h5>

                <p>
                    {text}
                </p>
            </div>
        </article>
    )
}