import Head from 'next/head'
import Title from '../../components/Title'
import { getSortedUpdatesData } from '../../lib/updates'

export default function Updates({ allUpdatesData }) {
  return (
    <>
      <Head>
        <title>YouPoint〘 Updates 〙</title>
      </Head>
      <Title title='Updates' subtitle='Amazing updates here at YouPoint!' />

      <ul>
        {allUpdatesData.map(({ id, date, title }) => (
          <li key={id}>
            <h5>{title}</h5>
            <br />
            <p>{date}</p>
            <br />
            <p>{id}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const allUpdatesData = getSortedUpdatesData()
  return {
    props: {
      allUpdatesData,
    },
  }
}
