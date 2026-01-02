import styles from '../../styles/VideoBg.module.css'

export default function VideoBg({src}: {src: string}) {
    return (
        <div className={styles.videoWrap}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className={styles.video}
                > 
                <source src={src} type="video/webm" />
                </video>
            </div>
    )
}