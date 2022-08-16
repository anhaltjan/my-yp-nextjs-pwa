import Title from '../../components/Title'
import Link from 'next/link'

import { getAllUpdateIds, getUpdateData } from '../../lib/updates'

import styles from '../../styles/updatePage.module.css'

export default function Update({ updateData }) {
  return (
    <>
      <div className={styles.updatePage}>
        <Title title={`Update ${updateData.id}`} subtitle={updateData.title} />
        <div className={styles.contentWrap}>
          <div dangerouslySetInnerHTML={{ __html: updateData.contentHtml }} />
        </div>
      </div>
      <Link href='/updates'>
        <a className='secondaryBtn fitToContent'>Go back</a>
      </Link>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllUpdateIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const updateData = await getUpdateData(params.id)
  return {
    props: {
      updateData,
    },
  }
}
