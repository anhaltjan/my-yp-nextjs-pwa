import styles from '../styles/unavailable.module.css'
import Link from 'next/link'
const Unavailable = () => {
  return (
    <li className={styles.unavailable}>
      <iframe
        src='https://giphy.com/embed/dJYoOVAWf2QkU'
        width='100%'
        height='200'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <h2>Awwe.. Sorry, nothing has been found😭 </h2>
      <br />
      <p>
        <span>But! You can right this wrong!</span> Become a{' '}
        <span className={styles.yp}>YP</span> teammate, share locations that
        offer services in English.{' '}
        <Link href='#contact'>
          <a className={styles.contactLink}> be a team player</a>
        </Link>
        😘👍
      </p>
    </li>
  )
}

export default Unavailable
