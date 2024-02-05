import { Col } from 'react-bootstrap'
import styles from './Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Card = ({imgURL , onClick}) => {
  return (
    <Col md={4}>
        <div
        className={styles.card}
        onClick={onClick}
        >
            <img
            className={`${styles.img} rounded-2`}
            src={imgURL}
            alt={imgURL}
            />
            <div className={`${styles.overlay} d-flex justify-content-center align-items-center`}>
                <FontAwesomeIcon icon={faPlus} className={`${styles.plus} text-light`} />
            </div>
            </div>
    </Col>
  )
}

export default Card