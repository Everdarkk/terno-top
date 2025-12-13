import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/Navbar.module.css"
import { geologica, tektur, unbounded } from "@/app/layout"

export default function Navbar() {
    const navList = [
        { title: "Продукція", path:"/products"},
        { title: "Клієнтам", path:"/clients"},
        { title: "Про нас", path:"/about"},
        { title: "Блог", path:"/blog"},
        { title: "Контакти", path:"/contacts"},
    ]

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoWrap}>
                <Link href={"/home"}>
                    <Image
                        src={"/images/utils/logo.png"}
                        alt="Терно-Топ"
                        width={100}
                        height={100}
                    />
                </Link>

                <div className={styles.titleWrap}>
                    <h3 className={`${tektur.className} ${styles.title}`}>
                        Терно-Топ
                    </h3>

                    <p className={`${unbounded.className} ${styles.text}`}>
                        ортопедичний центр
                    </p>
                </div>
            </div>

            <ul className={styles.navList}>
                {navList.map((item) => (
                    <li key={item.title} className={styles.item}>
                        <Link href={item.path} className={`${geologica.className} ${styles.link}`}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}