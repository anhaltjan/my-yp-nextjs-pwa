import Head from 'next/head'
import Title from '../components/Title'
import Card from '../components/Card'
import HelpUsCard from '../components/helpUsCard'

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
          <Card
            location='Tokyo'
            amount='1 ward available'
            image='/images/tokyo.jpg'
            link='/tokyo'
          />
          <HelpUsCard />
        </ul>
      </div>
    </>
  )
}
