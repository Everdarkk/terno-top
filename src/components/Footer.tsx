import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {geologica, tektur} from '@/app/layout'

export default function Footer() {
    const navList = [
    { title: "Продукція", path: "/products" },
    { title: "Клієнтам", path: "/clients" },
    { title: "Про нас", path: "/about" },
    { title: "Блог", path: "/blog" },
    { title: "Контакти", path: "/contacts" },
    ]

    const socialList = [
        {title: "Tik-Tok", path: "/", icon: "/images/utils/tiktok.png"},
        {title: "Facebook", path: "/", icon: "/images/utils/facebook.png"},
        {title: "Instagram", path: "/", icon: "/images/utils/instagram.png"},
    ]


    return (
        <footer className={styles.container}>
            <div className={styles.content}>
                <div className={styles.textWrap}>
                    <div> 
                        <h4 className={tektur.className}>
                            Терно-Топ
                        </h4>

                        <p>м. Тернопіль, вул.Київська, 2</p>

                        <p>
                            (0352)51 02 02
                        </p>

                        <p>
                            ternotop@ukr.net
                        </p>
                    </div>

                    <p className={styles.protected}>
                        2016-2026 всі права захищено &copy;
                    </p>    

                </div>

                <ul className={styles.menuWrap}>
                    {navList.map(item => (
                        <li key={item.title}>
                            <Link href={item.path} className={styles.link}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className={styles.socialWrap}>
                    {socialList.map(item => (
                        <li key={item.title}>
                            <Link href={item.path}>
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={75}
                                    height={75}
                                    className={styles.icon}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>
        </footer>
    )
}