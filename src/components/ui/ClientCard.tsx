
import styles from "../../styles/ClientCard.module.css"
import { overpass } from "@/app/fonts"
import { Review } from "@/lib/types"
import RatingStars from "./RatingStars"
import { AvatarPlaceholder } from "./AvatarPlaceholder"

type Props = {
  client: Review
}

export default function ClientCard({ client }: Props) {
  const { name, rating, text } = client

  return (
    <li className={styles.listItem}>
      <article className={styles.card}>
        {/* HEADER */}
        <header className={styles.header}>
          <div className={styles.user}>
            <AvatarPlaceholder name={name}/>
            <span className={`${styles.name} ${overpass.className}`}>
              {name}
            </span>
          </div>

          <RatingStars rating={rating} size={18} />
        </header>

        {/* TEXT */}
        <p className={styles.text}>{text}</p>
      </article>
    </li>
  )
}
