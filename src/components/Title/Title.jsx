import React from 'react'
import { Container } from 'react-bootstrap'

const Title = ({titleName}) => {
  return (
    <Container>
        <div className="texts mt-3 text-center">
            <h1 className='fw-bold text-uppercase'>{titleName}</h1>
        </div>
    </Container>
  )
}

export default Title