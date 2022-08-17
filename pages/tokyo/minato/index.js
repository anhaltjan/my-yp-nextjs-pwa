import Head from 'next/head'
import Title from '../../../components/Title'

import BusinessCard from '../../../components/BusinessCard'
import ReturnButton from '../../../components/ReturnButton'

const Minato = () => {
  return (
    <>
      <Head>
        <title>YouPoint〘 Minato City 港区 〙</title>
      </Head>
      <Title title='Minato' subtitle='2 Locations Found' />

      <ReturnButton page='/tokyo' />
      <ul className='list'>
        <BusinessCard
          name='American Clinic Tokyo'
          category='Clinic'
          addressEng='	3F No.1 Niikura Bldg. 1-7-4 Akasaka, Minatoku, Tokyo, JAPAN 107-0052'
          addressJp='	〒107-0052 東京都港区赤坂１丁目７−4 Ｎｏ．１ニイクラビル 3階'
          station='	Tameike-sannō'
          websiteURL='https://www.americanclinictokyo.com/'
          googleMapURL='https://g.page/AmericanClinicTokyo?share'
        />
        <BusinessCard
          name='motoazabu hills dental clinic'
          category='Dental clinic'
          addressEng='1 Chome-3-3 Motoazabu, Minato City, Tokyo 106-0046'
          addressJp='〒106-0046 東京都港区元麻布1丁目1-3'
          station='Azabujuban station'
          websiteURL='http://hills-dc.com/'
          googleMapURL='https://goo.gl/maps/WUPjHEJEdrGeAAEs6'
        />
      </ul>
    </>
  )
}

export default Minato
