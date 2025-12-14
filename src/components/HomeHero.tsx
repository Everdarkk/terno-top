import styles from "../styles/HomeHero.module.css"

export default function HomeHero() {
    return (
        <section className={styles.container}>
            <div className={styles.videoWrap}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className={styles.video}
                > 
                <source src="/videos/video-1.webm" type="video/webm" />
                </video>
            </div>
        </section>
    )
}