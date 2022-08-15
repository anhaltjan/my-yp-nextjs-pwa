const Title = (props) => {
  return (
    <div className='title-wrap'>
      <h2 className='page-title'>{props.title}</h2>
      <h3 className='page-subtitle'>{props.subtitle}</h3>
    </div>
  )
}

export default Title
