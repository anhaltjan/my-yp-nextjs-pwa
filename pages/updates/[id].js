import { getAllUpdateIds, getUpdateData } from '../../lib/updates'

export default function Update({ updateData }) {
  return (
    <div>
      <h2>{updateData.title}</h2>
      <br />
      {updateData.id}
      <br />
      {updateData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: updateData.contentHtml }} />
    </div>
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
