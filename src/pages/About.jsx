import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Title from '../components/Title/Title'
import styles from '../components/Main/Main.module.css'
import Line from '../components/Line/Line'
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <section className={`about py-5 text-light ${styles.bg}`}>
      <Helmet>
        <title>OMAR - About</title>
      </Helmet>
      <Container >
        <Title titleName="About Omar"/>
        <Line/>
        <Row className='text-start justify-content-center mt-4'>
            <Col md={4}>
              <p className='lh-lg'>A Frontend Developer honed my skills in crafting UI for web applications and collaborating with Back-end developers to deliver professional UI components.</p>
            </Col>
            <Col md={4}>
              <p className='lh-lg'>Experienced in front-end web technologies and frameworks, including React, Angular, HTML, CSS, Bootstrap, and JavaScript.</p>
            </Col>
          </Row>
      </Container>
    </section>
  )
}

export default About