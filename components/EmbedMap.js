import styles from '../styles/embedMap.module.css'

const EmbedMap = (props) => {
  return (
    <iframe
      className={styles.embedMap}
      src={props.src}
      allowFullScreen=''
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    ></iframe>
  )
}

export default EmbedMap
