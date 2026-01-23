import styles from '../styles/ClientsHero.module.css'
import { overpass, geologica } from '@/app/fonts'
import VideoBg from './ui/VideoBg'

export default function ClientsHero() {
    return (
        <section className={styles.container}>
            {/* VIDEO BACKGROUND */}
            <VideoBg src="/videos/video-2.webm"/>

            {/* CONTENT */}
            <div className={styles.content}>
                {/* HEADER */}
                <div className={styles.headerWrap}>
                    <div className={styles.text}>
                        <h1 className={`${overpass.className}`}>
                            Клієнтам <span style={{whiteSpace: 'nowrap'}}>Терно-Топ:</span> корисна інформація та відповіді на ваші запитання
                        </h1>

                        <h3 className={`${geologica.className}`}>
                            почніть із діагностики: як обрати правильне ортопедичне рішення
                        </h3>
                    </div>
                </div>

            </div>
        </section>
    )
}