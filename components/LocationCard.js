import Image from 'next/image'
import Link from 'next/link'

const LocationCard = (props) => {
  return (
    <li className='card'>
      <div className='top'>
        <h3 className='card-header'>{props.location}</h3>
        <span className='location-amount'>
          {props.amount} Locations available
        </span>
      </div>
      <div className='image'>
        <Image
          src={props.image}
          alt={props.location}
          layout='responsive'
          width={200}
          height={125}
        />
      </div>
      <div className='bottom'>
        <Link href={props.link}>
          <a>View</a>
        </Link>
      </div>
    </li>
  )
}

export default LocationCard
