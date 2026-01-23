import styles from "../styles/HomeSummary.module.css"
import {geologica, overpass} from "@/app/fonts"
import PerkCard from "./ui/PerkCard"
import { perkList } from "@/lib/data/perkList"

export default function HomeSummary() {
    return (
        <section className={`${styles.container} ${geologica.className}`}>
            <div className={styles.content}>
                {/* LEFT SIDE */}
                <div className={styles.textWrap}>
                    {/* HEADER */}
                    <div className={styles.header}>
                        <h3 className={`${styles.title} ${overpass.className}`}>
                            Пропонуємо для Вас найкращий сервіс
                        </h3>
                        
                        <p className={styles.text}>
                            Якість, якій довіряють. Надійне обслуговування. Експертна підтримка, вигідні умови та гарантія виробника! Отримайте професійну підтримку та швидкий результат вже сьогодні!
                        </p>
                    </div>

                    {/* STATS */}
                    <div className={styles.statsWrap}>
                        <div className={styles.statItem}>
                            <h5 className={overpass.className}>
                                10+
                            </h5>

                            <p>
                                років на ринку України
                            </p>
                        </div>

                        <div className={styles.statItem}>
                            <h5 className={overpass.className}>
                                5000+
                            </h5>

                            <p>
                                задоволених клієнтів
                            </p>
                        </div>
                            
                        <div className={styles.statItem}>
                            <h5 className={overpass.className}>
                                6
                            </h5>

                            <p>
                                ключових категорій здоров&apos;я
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className={styles.perksWrap}>
                    {perkList.map((perk) => (
                        <PerkCard
                            key={perk.title}
                            title={perk.title}
                            imgUrl={perk.imgUrl}
                        />
                    ))
                    }
                </div>

            </div>
        </section>
    )
}