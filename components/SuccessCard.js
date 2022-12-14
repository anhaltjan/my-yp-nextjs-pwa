import styles from '../styles/successCard.module.css'
import ReturnButton from '../components/ReturnButton'

const SuccessCard = () => {
  return (
    <div className={styles.card}>
      <iframe
        src='https://giphy.com/embed/Aw2V3gGD5znfG'
        width='100%'
        height='353'
        frameBorder='0'
      />

      <h2 className={styles.successTitle}>γοΈ πSuccess!! Message sent!π γοΈ</h2>

      <p className={styles.successMessage}>
        Please allow <span className={styles.redTextSmall}>24 hours</span> for
        your well deserved reply.
        <br />
        And hey.. <span className={styles.emote}>π³</span>
        <br />
        <span className={styles.redText}>Thank you </span>{' '}
        <span className={styles.emote}>ππ</span>
      </p>
      <ReturnButton page='/' />
    </div>
  )
}

export default SuccessCard
