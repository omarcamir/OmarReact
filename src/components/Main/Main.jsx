import React from 'react'
import styles from './Main.module.css'
import { Container } from 'react-bootstrap'
import avater from '../../assets/images/avatar.svg'
import Line from '../Line/Line'

const Main = () => {
  return (
    <main className={`${styles.bg} text-center text-light py-5`}>
        <Container>
            <img src={avater} alt="avatar"
            className='d-block w-25 mx-auto'
            />
            <div className="texts mt-3">
                <h1 className='fw-bold'>Omar Samir</h1>
                <Line/>
                <p className='fs-5'>Frontend Developer - Video Editor</p>
            </div>
        </Container>
    </main>
  )
}

export default Main