import { overpass, geologica } from '@/app/layout'
import Image from "next/image"
import styles from '../../styles/ProductCard.module.css'
import { Product } from '../../lib/types/index'


type Props = {
    product: Product
}

export default function ProductCard({product} : Props) {
    const { title, materials, season, imgSrc } = product

    return (
        <li>
            <article className={styles.container}>
                {/* IMAGE */}
                <div className={styles.imageWrap}>
                    <Image
                        src={imgSrc}
                        alt={title}
                        width={500}
                        height={500}
                        className={styles.image}
                    />
                </div>
                {/* DETAILS */}
                <div className={styles.textWrap}>
                    <h5 className={overpass.className}>
                        {title}
                    </h5>
                    <p>
                        {materials}
                    </p>
                    <p>
                        {season}
                    </p>
                </div>
                {/* DETAILS BUTTON */}
                <button className={`${styles.btn} ${geologica.className}`}>
                    Детальніше
                </button>
            </article>
        </li>
    )
}