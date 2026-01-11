import styles from "../styles/ProductsHero.module.css"
import { overpass } from "@/app/layout"
import VideoBg from "./ui/VideoBg"

export default function ProductsHero() {
    return (
        <section className={styles.container}>
            {/* VIDEO */}
            <VideoBg src="/videos/video-6.webm"/>
            {/* CONTENT */}
            <div className={styles.content}>
                {/* HEADER */}
                <div className={styles.headerWrap}>
                    <div className={styles.text}>
                        <h1 className={`${overpass.className}`}>
                            Каталог продукції ортопедичного центру Терно-Топ
                        </h1>
                        <p>
                            ознайомтесь з нашими виробами, кожен з яких індивідуально підлаштований під Ваші потреби
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}