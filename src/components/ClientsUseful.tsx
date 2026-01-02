import styles from "../styles/ClientsUseful.module.css"
import { adviceList } from "@/lib/data/adviceList"
import { overpass } from "@/app/layout"
import BackgroundWrap from "./ui/BackgroundWrap"


export default function ClientsUseful() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                {/* TITLE */}
                <div className={`${styles.title} ${overpass.className}`}>
                    <h3>
                        Корисна інформація клієнтам
                    </h3>

                    {/* LINE */}
                    <span className={styles.line}></span>
                </div>

                {/* DESCRIPTION */}
                <div className={styles.descriptionWrap}>
                    <h5 className={overpass.className}>
                        Подовжуйте термін служби: правильний догляд за ортопедичними виробами
                    </h5>
                    
                    <p>
                        Дотримання простих правил догляду гарантує максимальну ефективність та довговічність вашого ортопедичного взуття, устілок та корсетів.
                    </p>
                </div>

                {/* MAIN INFO */}
                <div className={styles.infoWrap}>
                    {adviceList.map(item => (
                        <BackgroundWrap imgSrc={item.imgUrl} key={item.title}>
                            <div className={styles.textWrap}>
                                <h5 className={overpass.className}>
                                    {item.title}
                                </h5>
                                <ul className={styles.adviceWrap}>
                                    {item.advices.map(advice => (
                                        <li key={advice}>
                                            <p className={styles.advice}>
                                                {advice}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                    </BackgroundWrap>
                    ))}
                </div>
            </div>
        </section>
    )
}