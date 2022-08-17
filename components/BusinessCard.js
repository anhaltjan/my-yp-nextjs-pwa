import styles from '../styles/businessCard.module.css'
import { ImLocation } from 'react-icons/im'
import { BiWorld } from 'react-icons/bi'
import { MdCategory } from 'react-icons/md'
import { MdTrain } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'

const BusinessCard = (props) => {
  return (
    <li>
      <table className={styles.card}>
        <caption className={styles.name}>{props.name}</caption>
        <tr className={styles.tableRow}>
          <th className={styles.tableHeader}>
            <MdCategory />
          </th>
          <td className={styles.tableData}>{props.category}</td>
        </tr>
        <tr className={styles.tableRow}>
          <th className={styles.tableHeader}>
            <ImLocation />
          </th>
          <td className={styles.tableData}>{props.addressEng}</td>
        </tr>
        <tr className={styles.tableRow}>
          <th className={styles.tableHeader}>
            <ImLocation />
          </th>
          <td className={styles.tableData}>{props.addressJp}</td>
        </tr>
        <tr className={styles.tableRow}>
          <th className={styles.tableHeader}>
            <MdTrain />
          </th>
          <td className={styles.tableData}>{props.station}</td>
        </tr>
        <tr className={styles.tableRow}>
          <th className={styles.tableHeader}>
            <BiWorld />
          </th>
          <td className={styles.tableData}>
            <a
              target={`_blank`}
              className={styles.link}
              href={props.websiteURL}
            >
              Website
            </a>
          </td>
        </tr>
        <tr className={styles.tableRow}>
          <th className={styles.tableHeader}>
            <BiWorld />
          </th>
          <td className={styles.tableData}>
            <a
              target={`_blank`}
              className={styles.link}
              href={props.googleMapURL}
            >
              <FcGoogle />
              Google Maps
            </a>
          </td>
        </tr>
      </table>
    </li>
  )
}

export default BusinessCard
