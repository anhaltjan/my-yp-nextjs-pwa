import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import Banner from './Banner'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <Banner />
      </div>
      <div>
        <Link href='/'>
          <a className={styles.brand}>
            <h1>YouPoint</h1>
          </a>
        </Link>

        <nav className={styles.navigation}>
          <Link href='/'>
            <a
              className={
                currentRoute === '/' ? styles.active : styles.nonActive
              }
            >
              Home
            </a>
          </Link>

          <Link href='/about'>
            <a
              className={
                currentRoute === '/about' ? styles.active : styles.nonActive
              }
            >
              About
            </a>
          </Link>

          <Link href='/updates'>
            <a
              className={
                currentRoute === '/updates' ? styles.active : styles.nonActive
              }
            >
              Updates
            </a>
          </Link>

          <Link href='/contact'>
            <a
              className={
                currentRoute === '/contact' ? styles.active : styles.nonActive
              }
            >
              Contact
            </a>
          </Link>

          <a
            href='https://youpointofficial.wordpress.com/'
            className={
              currentRoute === '/blog' ? styles.active : styles.nonActive
            }
            target={`_blank`}
          >
            Blog
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
