import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
const Navbar = () => {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <header>
      <div className='banner'></div>
      <div>
        <Link href='/'>
          <a className='brand'>
            <Image
              width={50}
              height={50}
              src='/grn_background.png'
              alt='YouPoint logo'
            />
            <h1>YouPoint.io</h1>
          </a>
        </Link>

        <nav className='navigation'>
          <Link href='/'>
            <a className={currentRoute === '/' ? 'active' : 'non-active'}>
              Home
            </a>
          </Link>

          <Link href='/about'>
            <a className={currentRoute === '/about' ? 'active' : 'non-active'}>
              About
            </a>
          </Link>

          <Link href='/updates'>
            <a
              className={currentRoute === '/updates' ? 'active' : 'non-active'}
            >
              Updates
            </a>
          </Link>

          <a
            href='https://youpointofficial.wordpress.com/'
            className={currentRoute === '/blog' ? 'active' : 'non-active'}
            target={`_blank`}
          >
            Blog
          </a>

          <style jsx global>{`
            .navigation {
              display: flex;
              list-style: none;
              justify-content: center;
            }

            .navigation a {
              margin-inline: 1rem;
            }

            .navigation a {
              color: #fff;
              padding-bottom: 0.25rem;
            }

            .non-active {
              border-bottom: dotted 1px #000;
            }

            .active {
              border-bottom: 1px solid #01eb00;
            }

            .navigation a:hover {
              border-bottom: dotted 1px var(--primary-400);
            }
          `}</style>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
