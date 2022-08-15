import Link from 'next/link'

/* REACT ICONS */
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLine } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <p className='copyright'>YouPoint COPYRIGHT © 2022</p>
      <ul className='sns-container'>
        <li>
          <Link href=''>
            <a>
              <BsYoutube size='1.75em' />
            </a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a>
              <BsLine size='1.75em' />
            </a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a>
              <BsFacebook size='1.75em' />
            </a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a>
              <BsInstagram size='1.75em' />
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
