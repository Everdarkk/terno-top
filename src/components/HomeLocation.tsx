import styles from '../styles/HomeLocation.module.css'
import GoogleMap from './ui/GoogleMap'

export default function HomeLocation() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <GoogleMap />
            </div>
        </section>
    )
}