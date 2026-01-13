'use client'

import { useState } from "react"
import { faq } from "@/lib/data/faq"
import styles from "../styles/ClientsFaq.module.css"
import { overpass } from "@/app/layout"
import FaqAccordeon from "./ui/FaqAccordeon"
import Link from "next/link"

export default function ClientsFaq() {
    const [activeIndex, setActiveIndex] = useState(null)

    // ACCORDEON LOGIC
    const handleToggle = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                {/* TITLE */}
                <div className={`${styles.title} ${overpass.className}`}>
                    <h3>
                        Поширені запитання (FAQ)
                    </h3>

                    {/* LINE */}
                    <span className={styles.line}></span>
                </div>

                {/* QUESTIONS */}
                <ul className={styles.questionsWrap}>
                    {faq.map((item, index) => (
                        <FaqAccordeon 
                            key={index} 
                            item={item} 
                            isOpen={activeIndex === index} 
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </ul>

                {/* ADDITIONAL */}
                <div className={styles.additionalWrap}>
                    <h5 className={overpass.className}>
                        Маєте додаткові питання?
                    </h5>
                    <p>
                        Залиште свій запит через форму нижче
                    </p>
                    {/* SEND BUTTON */}
                    <Link href={'/form'}>
                        <button className={styles.btn}>
                            Відправити
                        </button>
                    </Link>
                </div>
            </div>
            
        </section>
    )
}