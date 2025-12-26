import Image from "next/image"
import styles from '../../styles/ClientCard.module.css'
import { overpass, geologica } from "@/app/layout"
import { Review } from "@/lib/types"

type Props = {
    client: Review
}

export default function ClientCard({client}: Props) {
    const {id, name, sex, rating, text} = client

    const male = 'https://xsgames.co/randomusers/avatar.php?g=male'
    const female = 'https://xsgames.co/randomusers/avatar.php?g=female'
    const linkSrc = (sex === 'male' ? male : female)

    return (
        <li>
            <article className={styles.container}>
                {/* IMAGE AND NAME */}
                <div className={styles.imageWrap}>
                    <Image
                        src={linkSrc}
                        alt={name}
                        width={50}
                        height={50}
                    />

                    <h6>
                        {name}
                    </h6>
                </div>

                <div className={styles.starsWrap}>
                    RATING
                </div>

                <div className={styles.textWrap}>
                    <p>
                        {text}
                    </p>
                </div>

            </article>
        </li>
    )
}