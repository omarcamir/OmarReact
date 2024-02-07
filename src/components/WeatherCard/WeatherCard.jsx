import { Col, Container, Row } from 'react-bootstrap'
import styles from './WeatherCard.module.css'
import WeatherSearch from './WeatherSearch/WeatherSearch'
import WeatherDegree from './WeatherDegree/WeatherDegree'
import { useEffect, useState } from 'react'

const WeatherCard = () => {
  const [city,setCity]=useState('alexandria')
  const [weather,setWeather]=useState([])
  let APIKey = '46fbf2853c2eea4a8811e3562b361727'
  let URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`

  useEffect(() => {
    const fetchData = async () =>{
      if (city ==='') return;
      const res = await fetch(URL)
      const data = await res.json()
      setWeather(data)
    }
    fetchData()
  },[URL,city])
  return (
    <Container className='py-5'>
        <Row className='justify-content-center align-items-center'>
            <Col md={5}>
                <div className={`${styles.cardBox} d-flex flex-column align-items-center justify-content-between p-3 rounded-4 border border-1`}>
                    <WeatherSearch setCity={setCity}/>
                    <WeatherDegree weather={weather}/>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default WeatherCard