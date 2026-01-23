import { overpass } from '@/app/fonts'
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

                <Link href={'https://www.google.com/maps/place/%D0%9E%D1%80%D1%82%D0%BE%D0%BF%D0%B5%D0%B4%D0%B8%D1%87%D0%BD%D0%B8%D0%B9+%D1%86%D0%B5%D0%BD%D1%82%D1%80+%D0%9F%D0%9F+%D0%A2%D0%95%D0%A0%D0%9D%D0%9E-%D0%A2%D0%9E%D0%9F/@49.5649468,25.6337242,17z/data=!4m8!3m7!1s0x473033e06fe55555:0xe055a65532586993!8m2!3d49.5649468!4d25.6362991!9m1!1b1!16s%2Fg%2F11b6dnrfw9?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D'} className={`${styles.link} ${overpass.className}`}>
                    Читати усі відгуки про нас
                </Link>

            </div>
        </section>
    )
}