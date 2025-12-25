import { ReactNode } from "react"
import styles from '../../styles/CardSlider.module.css'

type Props = {
  children: ReactNode[]
}

export default function CardSlider({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {[...children, ...children].map((child, index) => (
          <div className={styles.cardWrapper} key={index}>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
