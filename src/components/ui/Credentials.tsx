import { overpass } from "@/app/fonts"
import styles from "../../styles/Credentials.module.css"
import { Credential } from "@/lib/types"
import Image from "next/image"

export default function Credentials({ title, text, imgSrc }: Credential) {
    return (
        <div className={styles.container}>
            {/* ICON */}
            <Image
                src={imgSrc}
                alt={title}
                width={100}
                height={100}
                className={styles.icon}
            />

            {/* TEXT */}
            <div className={styles.textWrap}>
                <h6 className={overpass.className}>
                    {title}
                </h6>

                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}