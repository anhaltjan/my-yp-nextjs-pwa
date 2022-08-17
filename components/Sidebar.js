import Image from 'next/image'
import styles from '../styles/sideBar.module.css'
import Jan from '../public/images/jan.png'
import Kemmy from '../public/images/kemmy.png'

const Sidebar = () => {
  return (
    <div className={styles.contactContent}>
      <div className={styles.imgContainer}>
        <div className={styles.imgWrap}>
          <Image
            width={200}
            height={200}
            src={Jan}
            layout='responsive'
            alt='Picture of Jan'
          />
        </div>
        <div className={styles.imgWrap}>
          <Image
            width={200}
            height={200}
            src={Kemmy}
            layout='responsive'
            alt='Picture of Kemmy'
          />
        </div>
      </div>
      <ul className={styles.exampleList}>
        <li>If you have a question small or big</li>
        <li>If you can&apos;t find a location in Tokyo</li>
        <li>If you have any location recommendations let us know</li>
        <li>We want to get to know you! Let&apos;s chat! </li>
      </ul>
    </div>
  )
}

export default Sidebar
