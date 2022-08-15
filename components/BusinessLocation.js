import Link from 'next/link'
import { BiCategoryAlt } from 'react-icons/bi'
import { BiTrain } from 'react-icons/bi'
import { TiInfoOutline } from 'react-icons/ti'
import { TiBusinessCard } from 'react-icons/ti'

const BusinessLocation = (props) => {
  return (
    <li className='listings'>
      <table className='listing-table'>
        <tr>
          <th>
            <TiBusinessCard />
          </th>
          <td>{props.name}</td>
        </tr>
        <tr>
          <th>
            <BiCategoryAlt />
          </th>
          <td>{props.category}</td>
        </tr>
        <tr>
          <th>
            <BiTrain />
          </th>
          <td>{props.stations}</td>
        </tr>
        <tr>
          <th>
            <TiInfoOutline />
          </th>
          <td>
            <Link href={props.hrefOne}>
              <a>{props.hrefOneTitle}</a>
            </Link>
          </td>
        </tr>
      </table>
    </li>
  )
}

export default BusinessLocation
