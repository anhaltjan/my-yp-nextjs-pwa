import Head from 'next/head'
import Title from '../../components/Title'
import Unavailable from '../../components/Unavailable'
import Card from '../../components/Card'

const Tokyo = () => {
  return (
    <>
      <Head>
        <title>YouPoint〘 Tokyo 東京都 〙</title>
      </Head>
      <Title title='Tokyo' subtitle='Areas Available' />
      <ul className='list'>
        <Card
          location='Minato City 港区'
          amount='2'
          image='/images/minato-city.jpg'
          link='/tokyo/minato'
        />
      </ul>
    </>
  )
}

export default Tokyo
