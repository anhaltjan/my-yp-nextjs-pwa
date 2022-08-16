import Title from '../../components/Title'
import Unavailable from '../../components/Unavailable'

const Tokyo = () => {
  return (
    <>
      <Title title='Tokyo' subtitle='Areas Available' />
      <ul className='list'>
        <Unavailable />
      </ul>
    </>
  )
}

export default Tokyo
