import styles from "../styles/ContactsActual.module.css"
import ContactForm from "./ui/ContactForm"
import GoogleMap from "./ui/GoogleMap"

export default function ContactsActual() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.topWrap}>
                    {/* FORM */}
                    <ContactForm />
                    {/* CONTACTS */}
                    <div className={styles.contactsWrap}>
                        {/* TEXT */}
                        <div className={styles.textWrap}>
                            <h5>
                                Ми завжди на зв&apos;язку!
                            </h5>
                            <p>
                                Потрібна консультація щодо ортопедичного взуття, устілок чи корсетів? Наші фахівці готові надати вам вичерпну інформацію про послуги, ціни та графік роботи. Залиште свій запит через форму або скористайтеся прямими контактами нижче. Ми допоможемо вам підібрати індивідуальне ортопедичне рішення, яке забезпечить комфорт та здоров&apos;я.
                            </p>
                        </div>
                        {/* CREDENTIALS */}
                        <div className={styles.credentialsWrap}>
                    
                        </div>
                    </div>
                </div>

                {/* GOOGLE MAP */}
                <div className={styles.botWrap}>
                    <GoogleMap />
                </div>
            </div>
        </section>
    )
}