import styles from '../styles/updates.module.css'

const UpdatesCard = (props) => {
  return (
    <li className={styles.card}>
      <p>
        <h4>{props.title}</h4>
        <time dateTime={props.datePosted} className='dates'>
          {props.datePosted} -{' '}
        </time>
        {props.updateMsg}
      </p>
    </li>
  )
}

export default UpdatesCard
