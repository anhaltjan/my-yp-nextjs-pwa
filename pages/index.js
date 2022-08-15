import Head from 'next/head'
import Title from '../components/Title'
import LocationCard from '../components/LocationCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>YouPoint〘 Home 〙</title>
      </Head>

      <div className='home-section'>
        <Title
          title='Location Search'
          subtitle='English services available in Japan'
        />

        <ul className='list'>
          <LocationCard
            location='Tokyo'
            amount='24'
            image='/images/tokyo.jpg'
            link='/tokyo'
          />
        </ul>
      </div>
    </>
  )
}
