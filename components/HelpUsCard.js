import Image from 'next/image'
import Link from 'next/link'
import HelpUs from '../public/images/help-us_card.png'
import styles from '../styles/card.module.css'

const HelpUsCard = () => {
  return (
    <li className={styles.card}>
      <div className={styles.top}>
        <h3 className='card-header'>Contact now!</h3>
      </div>
      <div>
        <Image
          src={HelpUs}
          alt='info card'
          layout='responsive'
          width={200}
          height={125}
        />
      </div>
      <div className={styles.bottom}>
        <Link href={`/contact`}>
          <a>
            <button className='primaryBtn fullWidth'>Contact us!</button>
          </a>
        </Link>
      </div>
    </li>
  )
}

export default HelpUsCard
