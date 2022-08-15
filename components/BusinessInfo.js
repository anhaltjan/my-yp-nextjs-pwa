import styles from '../styles/business.module.css'

import { ImLocation } from 'react-icons/im'
import { GrTrain } from 'react-icons/gr'
import { BiWorld } from 'react-icons/bi'

const BusinessInfo = (props) => {
  return (
    <>
      <table className={styles.infoTable}>
        <tr>
          <th>
            <ruby>
              <ImLocation />
              <rp>(</rp>
              <rt>ENG</rt>
              <rp>)</rp>
            </ruby>
          </th>
          <td>{props.addressENG}</td>
        </tr>
        <tr>
          <th>
            <ruby>
              <ImLocation />
              <rp>(</rp>
              <rt>JP</rt>
              <rp>)</rp>
            </ruby>
          </th>
          <td>{props.addressJP}</td>
        </tr>
        <tr>
          <th>
            <GrTrain />
          </th>
          <td>{props.stations}</td>
        </tr>
        <tr>
          <th>
            <BiWorld />
          </th>
          <td>
            <a target={`_blank`} href={props.hrefOne}>
              {props.hrefOneTitle}
            </a>
          </td>
        </tr>
        <tr>
          <th>
            <BiWorld />
          </th>
          <td>
            <a target={`_blank`} href={props.hrefTwo}>
              {props.hrefTwoTitle}
            </a>
          </td>
        </tr>
      </table>
    </>
  )
}

export default BusinessInfo
