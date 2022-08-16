import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/card.module.css'

const LocationCard = (props) => {
  return (
    <li className={styles.card}>
      <div className={styles.top}>
        <h3 className='card-header'>{props.location}</h3>
        <span className={styles.locationAmt}>
          {props.amount} Locations available
        </span>
      </div>
      <div className={styles.image}>
        <Image
          src={props.image}
          alt={props.location}
          layout='responsive'
          width={200}
          height={125}
        />
      </div>
      <div className={styles.bottom}>
        <Link href={props.link}>
          <a>
            <button className='primaryBtn fullWidth'>View</button>
          </a>
        </Link>
      </div>
    </li>
  )
}

export default LocationCard
