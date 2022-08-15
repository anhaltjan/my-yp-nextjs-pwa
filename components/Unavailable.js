import styles from '../styles/unavailable.module.css'
const Unavailable = () => {
  return (
    <li className={styles.unavailable}>
      <iframe
        src='https://giphy.com/embed/dJYoOVAWf2QkU'
        width='100%'
        height='200'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <h2>Awwe.. Sorry, nothing has been found😭 </h2>
      <br />
      <p>
        <span>But! You can right this wrong!</span> If you know any locations
        please contact us <span>RIGHT NOW!!</span>😘👍
      </p>
      <br />
      <hr />
    </li>
  )
}

export default Unavailable
