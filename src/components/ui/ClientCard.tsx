import Image from "next/image"
import styles from "../../styles/ClientCard.module.css"
import { overpass } from "@/app/layout"
import { Review } from "@/lib/types"
import RatingStars from "./RatingStars"

type Props = {
  client: Review
}

export default function ClientCard({ client }: Props) {
  const { name, sex, rating, text } = client

  const avatar =
    sex === "male"
      ? "https://xsgames.co/randomusers/avatar.php?g=male"
      : "https://xsgames.co/randomusers/avatar.php?g=female"

  return (
    <li className={styles.listItem}>
      <article className={styles.card}>
        {/* HEADER */}
        <header className={styles.header}>
          <div className={styles.user}>
            <Image
              src={avatar}
              alt={name}
              width={48}
              height={48}
              className={styles.avatar}
              draggable={false}
            />
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
