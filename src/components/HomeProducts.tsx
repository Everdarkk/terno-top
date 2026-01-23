import { overpass } from '@/app/fonts'
import styles from '../styles/HomeProducts.module.css'
import Link from 'next/link'
import CardSlider from './ui/CardSlider'
import { products } from '@/lib/data/products'
import ProductCard from './ui/ProductCard'

export default function HomeProducts() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                {/* TITLE */}
                <div className={`${styles.title} ${overpass.className}`}>
                    <h3>
                        Популярні товари з нашого каталогу
                    </h3>

                    {/* LINE */}
                    <span className={styles.line}></span>
                </div>

                {/* CAROUSEL */}
                <CardSlider>
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </CardSlider>

                {/* SEE ALL LINK */}

                <Link href={'/products'} className={`${styles.link} ${overpass.className}`}>
                    Дивитись увесь каталог товарів та послуг
                </Link>

            </div>
        </section>
    )
}