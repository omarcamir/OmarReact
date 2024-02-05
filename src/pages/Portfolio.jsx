import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import styles from '../style/Portfolio.module.css'

import Title from '../components/Title/Title'
import DarkLine from '../components/DarkLine/DarkLine'
import Card from '../components/Card/Card'
import port1 from '../assets/images/port1.png'
import port2 from '../assets/images/port2.png'
import port3 from '../assets/images/port3.png'
import { Helmet } from 'react-helmet'
const Portfolio = () => {
  const images = [
    {
      img: port1,
    },
    {
      img: port2,
    },
    {
      img: port3,
    },
    {
      img: port2,
    },
    {
      img: port3,
    },
    {
      img: port1,
    },
  ]
  const [selectedImage, setSelectedImage] = useState(null)
  const handleOpenImage = (imageURL) => {
    setSelectedImage(imageURL)
  }
  const handleCloseImage = () => {
    setSelectedImage(null)
  }
  return (
    <section className={`${styles.portfolio} py-5`}>
      <Helmet>
        <title>OMAR - Portfolio</title>
      </Helmet>
      <Container>
        <Title titleName="Portfolio"/>
        <DarkLine/>
        <Row>
          {images.map((image, index) => (
            <Card
              key={index}
              imgURL={image.img}
              onClick={() => handleOpenImage(image.img)}
            />
          ))}
        </Row>
      {
        selectedImage && (
          <div
            className={styles.imageOverlay}
            onClick={handleCloseImage}
            >
              <img className={styles.selectedImg} src={selectedImage} alt={selectedImage}/>
          </div>
        )
      }
      </Container>
    </section>
  )
}

export default Portfolio