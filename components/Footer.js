import Link from 'next/link'
import styles from '../styles/footer.module.css'

/* REACT ICONS */
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLine } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>YouPoint COPYRIGHT © 2022</p>
      <ul className={styles.snsContainer}>
        <li>
          <Link href=''>
            <a>
              <BsYoutube size='1.5rem' />
            </a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a>
              <BsLine size='1.5rem' />
            </a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a>
              <BsFacebook size='1.5rem' />
            </a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a>
              <BsInstagram size='1.5rem' />
            </a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a>
              <BsTwitter size='1.75em' />
            </a>
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
