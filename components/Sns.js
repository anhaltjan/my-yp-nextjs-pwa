/* REACT ICONS */
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLine } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'

import styles from '../styles/sns.module.css'

const Sns = () => {
  return (
    <div>
      <ul className={styles.snsContainer}>
        <li>
          <a>
            <BsYoutube size='1.5rem' />
          </a>
        </li>
        <li>
          <a>
            <BsLine size='1.5rem' />
          </a>
        </li>
        <li>
          <a>
            <BsFacebook size='1.5rem' />
          </a>
        </li>
        <li>
          <a>
            <BsInstagram size='1.5rem' />
          </a>
        </li>
        <li>
          <a>
            <BsTwitter size='1.75em' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sns
