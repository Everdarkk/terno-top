import styles from "../styles/ClientsVisit.module.css"
import Image from "next/image"
import PerkCard from "./ui/PerkCard"
import { steps } from "@/lib/data/steps"
import { overpass, geologica } from "@/app/layout"

export default function ClientsVisit() {
    return (
        <section>
            <div className={styles.content}>
                {/* TITLE */}
                <h3 className={`${styles.title} ${overpass.className}`}>
                    Рекомендації перед візитом до центру
                </h3>

                {/* MAIN INFO */}
                <div className={styles.infoWrap}>
                    {/* LEFT SIDE */}
                    <div className={styles.leftWrap}>
                        {/* HEADER */}
                        <div className={styles.header}>
                            <h5 className={`${overpass.className}`}>
                                Ласкаво просимо до ортопедичного центру Терно-Топ!
                            </h5>
                            <p>
                                Ми прагнемо зробити ваш шлях до комфортного руху максимально зрозумілим та ефективним. Перш ніж зробити свій вибір, ознайомтеся з нашою ключовою інформацією та рекомендаціями.
                            </p>
                        </div>

                        {/* IMAGE */}
                        <Image
                            src={'/images/pics/contact.webp'}
                            alt='Вітання клієнта'
                            width={1000}
                            height={1000}
                            className={styles.image}
                        />
                    </div>

                    {/* RIGHT SIDE */}
                    <div className={styles.rightWrap}>
                        <ul className={styles.rightWrap}>
                            {steps.map((step) => (
                                <li key={step.title} className={styles.stepWrap}>
                                    <div>
                                        <PerkCard title={step.title} imgUrl={step.imgUrl}/>
                                    </div>

                                    <p>
                                        {step.text}
                                    </p>
                                </li>
                        ))}
                    </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}