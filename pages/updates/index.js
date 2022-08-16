import Head from 'next/head'
import Title from '../../components/Title'
import { getSortedUpdatesData } from '../../lib/updates'

import styles from '../../styles/updates.module.css'

export default function Updates({ allUpdatesData }) {
  return (
    <>
      <Head>
        <title>YouPoint〘 Updates 〙</title>
      </Head>
      <Title title='Updates' subtitle='Amazing updates here at YouPoint!' />

      <ul className={`list`}>
        {allUpdatesData.map(({ id, date, title }) => (
          <li key={id} className={styles.card}>
            <a href={`updates/${id}`}>
              <div className={styles.textContain}>
                <div className={styles.cta}>{id}</div>
                <div className={styles.info}>
                  <h3>{title}</h3>
                  <time dateTime={date}>{date}</time>
                </div>
              </div>
            </a>
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
