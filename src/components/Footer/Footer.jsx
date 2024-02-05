import { Col, Container, Row } from 'react-bootstrap'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faLinkedin , faInstagram , faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const socialLinks = [
    {
      link:"https://www.facebook.com",
      icon :faFacebook,
    },
    {
      link:"https://www.linkedin.com/in/omarcamir",
      icon :faLinkedin,
    },
    {
      link:"https://www.instagram.com",
      icon :faInstagram,
    },
    {
      link:"https://www.twitter.com",
      icon :faTwitter,
    },
  ]
  return (
    <footer className={`${styles.footer} text-center text-light`}>
      <Container className='py-5'>
        <Row>
          <Col md={4} className='my-3'>
            <h3 className='text-uppercase'>Location</h3>
            <p className='lh-lg'>2215 John Daniel Drive<br/> Clark, MO 65243</p>
          </Col>
          <Col md={4} className='my-3'>
            <h3 className='text-uppercase'>Social</h3>
            <ul className='list-unstyled d-flex justify-content-center align-items-center'>
              {socialLinks.map((socialLink, index) => (
                <li key={index} className={styles.social}>
                  <Link to={socialLink.link}>
                    <FontAwesomeIcon icon={socialLink.icon} className='text-light mx-3' />
                  </Link>
              </li>
              ))}
            </ul>
          </Col>
          <Col md={4} className='my-3'>
            <h3 className='text-uppercase'>About</h3>
            <p>A Frontend Developer<br/> helps you to build your next project</p>
          </Col>
        </Row>
      </Container>
      <div className="copyright bg-dark py-3">
        <Container>
          <p className='m-0'>Copyright © 2024. Omar Samir All Rights Reserved</p>
        </Container>
      </div>
    </footer>
  )
}

export default Footer