import styles from "../../styles/FormPage.module.css"
import ContactForm from "@/components/ui/ContactForm"

export default function FormPage() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <ContactForm />
            </div>
        </section>
    )
}