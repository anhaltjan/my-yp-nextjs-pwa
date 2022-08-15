import Link from 'next/link'

const ReturnButton = (props) => {
  return (
    <Link href={props.url} scroll={false}>
      <a className='return'>Return</a>
    </Link>
  )
}

export default ReturnButton
