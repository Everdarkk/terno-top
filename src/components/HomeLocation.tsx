import styles from '../styles/HomeLocation.module.css'
import GoogleMap from './ui/GoogleMap'
import { overpass } from '@/app/fonts'
import Image from 'next/image'

export default function HomeLocation() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                {/* TITLE */}
                <div className={`${styles.title} ${overpass.className}`}>
                    <h3>
                        Де нас знайти
                    </h3>

                    {/* LINE */}
                    <span className={styles.line}></span>
                </div>

                {/* MAIN INFO */}
                <div className={styles.infoWrap}>
                    {/* TEXT PART */}
                    <div className={styles.textWrap}>
                        {/* LOCATION */}
                        <div className={styles.locationWrap}>
                            <div className={styles.headerWrap}> 
                                <Image
                                    src={'/images/utils/location.png'}
                                    alt='Location'
                                    width={100}
                                    height={100}
                                    className={styles.icon}
                                />
                                <h5 className={styles.header}>
                                    Адреса
                                </h5>
                            </div>
                            <div className={styles.location}>
                                <p>
                                    Наш офіс/магазин розташований за адресою: м. Тернопіль, вул. Київська, 2
                                </p>
                                <p>
                                    Орієнтир: Будинок побуту &ldquo;Сонячний&rdquo;
                                </p>
                                <p>
                                    Поруч біля &ldquo;Території Взуття&rdquo;
                                </p>
                            </div>
                        </div>

                        {/* WORK HOURS */}
                        <div className={styles.workHoursWrap}>
                            <div className={styles.headerWrap}>
                                <Image
                                    src={'/images/utils/calendar.png'}
                                    alt='Location'
                                    width={100}
                                    height={100}
                                    className={styles.icon}
                                />
                                <h5 className={styles.header}>
                                    Режим роботи
                                </h5>
                            </div>
                            <div className={styles.workHours}>
                                <div className={styles.days}>
                                    <p>
                                        Пн-Пт
                                    </p>
                                    <p>
                                        Субота
                                    </p>
                                    <p>
                                        Неділя
                                    </p>
                                </div>
                                <div className={styles.hours}>
                                    <p>
                                        9:00 - 19:00
                                    </p>
                                    <p>
                                        10:00 - 15:00
                                    </p>
                                    <p>
                                        Вихідний
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CONTACTS */}
                        <div className={styles.contactsWrap}>
                            <div className={styles.headerWrap}>
                                <Image
                                    src={'/images/utils/mobile.png'}
                                    alt='Phone'
                                    width={100}
                                    height={100}
                                    className={styles.icon}
                                />
                                <h5 className={styles.header}>
                                    Контакти
                                </h5>
                            </div>
                            <div className={styles.contacts}>
                                <div className={styles.contactsNames}>
                                    <p>
                                        Бухгалтерія:
                                    </p>
                                    <p>
                                        Адміністрація:
                                    </p>
                                    <p>
                                        Магазин:
                                    </p>
                                    <p>
                                        Електронна пошта:
                                    </p>
                                </div>
                                <div className={styles.contactsNumbers}>
                                    <p>(0352) 26 76 90</p>
                                    <p>(0352) 51 02 02</p>
                                    <p>(099) 144 85 43</p>
                                    <p>ternotop@ukr.net</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MAP */}
                    <GoogleMap />
                </div>
            </div>
        </section>
    )
}