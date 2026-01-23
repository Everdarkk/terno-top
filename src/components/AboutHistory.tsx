import styles from "../styles/AboutHistory.module.css"
import { overpass } from "@/app/fonts"
import { history } from "@/lib/data/history"
import BackgroundWrap from "./ui/BackgroundWrap"

export default function AboutHistory() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                {/* TITLE */}
                <h3 className={`${styles.title} ${overpass.className}`}>
                    Історія ортопедичного центру Терно-Топ. З 2016 року робимо життя людей легшим та комфортнішим!
                </h3>

                {/* MAIN INFO */}
                <div className={styles.infoWrap}>
                    {history.map(story => (
                        <BackgroundWrap
                            key={story.text}
                            imgSrc={story.imgUrl}

                        >
                            <div className={styles.textWrap}>
                                <p>
                                    {story.text}
                                </p>
                            </div>
                        </BackgroundWrap>
                    ))}
                </div>
            </div>
        </section>
    )
}