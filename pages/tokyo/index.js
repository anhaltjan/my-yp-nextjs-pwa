export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return {
    props: { wards: data },
  }
}

const Tokyo = ({ wards }) => {
  return (
    <div>
      <h1>Wards in Tokyo</h1>
      {wards.map((ward) => (
        <div key={ward.id}>
          <a className=''>
            <h3>{ward.name}</h3>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Tokyo
