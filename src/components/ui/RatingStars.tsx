import styles from '../../styles/RatingStars.module.css'

type Props = {
  rating: number // 0–5
  size?: number
}

export default function RatingStars({ rating, size = 20 }: Props) {
  return (
    <div
      className={styles.stars}
      style={{ ["--star-size" as any]: `${size}px` }}
      aria-label={`Rating ${rating} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < rating

        return (
          <span
            key={i}
            className={`${styles.star} ${filled ? styles.filled : styles.empty}`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <svg
              viewBox="0 0 24 24"
              width={size}
              height={size}
              aria-hidden="true"
            >
              <path d="M12 2l2.9 6.6 7.1.6-5.3 4.6 1.6 7-6.3-3.7-6.3 3.7 1.6-7L2 9.2l7.1-.6L12 2z" />
            </svg>
          </span>
        )
      })}
    </div>
  )
}
