import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])
  return (
    <>
      <Head>
        <title>YouPoint ⊷ Page not found ! </title>
      </Head>
      <div className='not-found'>
        <h2>Ooops!</h2>
        <p>
          That page cannot be found.{' '}
          <Link href='/'>
            <a>Go back to the Homepage</a>
          </Link>
        </p>
        <iframe
          src='https://gifmagazine.net/embed/glp/18200'
          width='300'
          height='228'
          frameBorder='0'
          allowFullScreen
        ></iframe>
      </div>
    </>
  )
}

export default NotFound
