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
    </footer>
  )
}

export default Footer
