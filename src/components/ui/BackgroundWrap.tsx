import Image from "next/image"
import styles from "../../styles/BackgroundWrap.module.css"
import { ReactElement } from "react"

export default function BackgroundWrap({imgSrc, children}: {imgSrc: string, children : ReactElement}) {
    return (
        <div className={styles.container}>
            <Image
                src={imgSrc}
                alt="BG image"
                width={2000}
                height={1000}
                className={styles.image}
            />
            {children}
        </div>
    )
}