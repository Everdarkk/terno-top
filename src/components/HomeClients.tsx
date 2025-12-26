import { overpass } from '@/app/layout'
import styles from '../styles/HomeClients.module.css'
import Link from 'next/link'
import CardSlider from './ui/CardSlider'
import ClientCard from './ui/ClientCard'
import { reviews } from '@/lib/data/reviews'


export default function HomeClients() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                {/* TITLE */}
                <div className={`${styles.title} ${overpass.className}`}>
                    <h3>
                        Що про нас пишуть клієнти
                    </h3>

                    {/* LINE */}
                    <span className={styles.line}></span>
                </div>

                {/* CAROUSEL */}
                <CardSlider>
                    {reviews.map(review => (
                        <ClientCard key={review.id} client={review}/>
                    ))}
                </CardSlider>

                {/* SEE ALL LINK */}

                <Link href={'/products'} className={`${styles.link} ${overpass.className}`}>
                    Читати усі відгуки про нас
                </Link>

            </div>
        </section>
    )
}