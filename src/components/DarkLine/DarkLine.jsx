import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './DarkLine.module.css'

const DarkLine = () => {
  return (
    <div className='d-flex justify-content-center align-items-center mb-4'>
      <div className={styles.line}>
      </div>
      <FontAwesomeIcon icon={faStar} className={`${styles.star} mx-3`} />
      <div className={styles.line}>
      </div>
    </div>
  )
}

export default DarkLine