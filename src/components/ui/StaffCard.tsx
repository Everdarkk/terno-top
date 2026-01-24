import styles from '../../styles/StaffCard.module.css'
import { Staff } from '@/lib/types'
import { overpass } from '@/app/fonts'
import Image from 'next/image'

type Props = {
  staff: Staff
}

export default function StaffCard({ staff }: Props) {
    const { jobTitle, surname, name, secondName, imgUrl } = staff

    return (
      <article className={styles.container}>
        {/* IMAGE */}
        <div className={styles.imageWrap}>
          <Image
            src={imgUrl}
            alt={`${name} ${surname}`}
            width={500}
            height={500}
            className={styles.image}
            draggable={false}
          />
        </div>

        {/* DETAILS */}
        <div className={styles.textWrap}>
            <h6 className={overpass.className}>{jobTitle}</h6>
            <span className={styles.name}>
                <p>{surname}</p>
                <p>{name} {secondName}</p>
            </span>
        </div>
      </article>
    )
}