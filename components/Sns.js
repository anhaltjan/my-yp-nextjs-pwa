/* REACT ICONS */
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLine } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

import styles from '../styles/sns.module.css'

const Sns = () => {
  return (
    <div>
      <ul className={styles.snsContainer}>
        <li>
          <a
            href={`https://www.youtube.com/channel/UC2cN1dX5YrtWdmLbqWJ7teg`}
            target={`_blank`}
          >
            <BsYoutube size='1.5em' />
          </a>
        </li>
        {/*         <li>
          <a href={``} target={`_blank`}>
            <BsLine size='1.5em' />
          </a>
        </li> */}
        <li>
          <a href={`https://www.facebook.com/youpoint.offical.jp`}>
            <BsFacebook size='1.5em' />
          </a>
        </li>
        <li>
          <a href={`https://www.instagram.com/youpoint_/`} target={`_blank`}>
            <BsInstagram size='1.5em' />
          </a>
        </li>
        <li>
          <a href={`https://twitter.com/youpoint_`} target={`_blank`}>
            <BsTwitter size='1.75em' />
          </a>
        </li>
        <li>
          <a href={`www.linkedin.com/in/youpoint`} target={`_blank`}>
            <BsLinkedin size='1.75em' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sns
