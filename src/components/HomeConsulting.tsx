import { list, perks } from "@/lib/data/consulting"
import ConsultCard from "./ui/ConsultCard"
import styles from "../styles/HomeConsulting.module.css"
import { overpass, geologica } from "@/app/layout"
import Image from "next/image"

export default function HomeConsulting() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                {/* TITLE */}
                <h3 className={`${styles.title} ${overpass.className}`}>
                    Експертна консультація в нашому центрі
                </h3>

                {/* MAIN INFO */}
                <div className={styles.infoWrap}>
                    {/* LEFT SIDE */}
                    <div className={styles.leftWrap}>
                        {/* HEADER */}
                        <div className={styles.header}>
                            <h3>
                                Ваше здоров’я – наш пріоритет. Отримайте професійну консультацію від провідних спеціалістів у зручний для вас час.
                            </h3>
                            <p>
                                {list.titlePar}
                            </p>
                        </div>

                        {/* TEXT */}
                        <div className={styles.textWrap}>
                            <p>
                                {list.firstPar}
                            </p>

                            <p>
                                {list.secondPar}
                            </p>
                        </div>

                        {/* IMAGE */}
                        <Image
                            src={'/images/pics/consulting.jpg'}
                            alt='Консультація лікаря'
                            width={550}
                            height={400}
                            className={styles.image}
                        />
                    </div>

                    {/* RIGHT SIDE */}
                    <ul className={styles.rightWrap}>
                        {perks.map((perk) => (
                            <li key={perk.title} className={styles.perkItem}>
                                <ConsultCard
                                    title={perk.title}
                                    text={perk.text}
                                    imgSrc={perk.imgSrc}
                                    side={perk.side}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* SIGN BUTTON */}
                <button className={`${geologica.className} ${styles.btn}`}>
                    Записатись
                </button>
            </div>

        </section>
    )
}