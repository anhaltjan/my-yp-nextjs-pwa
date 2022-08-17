import Link from 'next/link'

const ReturnButton = (props) => {
  return (
    <Link href={props.page}>
      <a className='secondaryBtn fitToContent'>Return</a>
    </Link>
  )
}

export default ReturnButton
