import React, { useState , useEffect } from 'react'
import { Container } from 'react-bootstrap'
import styles from './WeatherDegree.module.css'

import clearImg from '../../../assets/images/clear.png'
import cloudImg from '../../../assets/images/cloud.png'
import rainImg from '../../../assets/images/rain.png'
import snowImg from '../../../assets/images/snow.png'
import drizzleImg from '../../../assets/images/drizzle.png'
import windImg from '../../../assets/images/wind.png'
import humidityImg from '../../../assets/images/humidity.png'

const WeatherDegree = ({weather}) => {
    const [weatherImg, setWeatherImg] = useState('')
    
    useEffect(() => {
        if (weather && weather.weather && weather.weather.length > 0) {
          const icon = weather.weather[0].icon;
    
          if (icon === '01n' || icon === '01d') {
            setWeatherImg(clearImg);
          } else if (icon === '10d' || icon === '10n') {
            setWeatherImg(rainImg);
          } else if (icon === '13n' || icon === '13d') {
            setWeatherImg(snowImg);
          } else if (icon === '09d' || icon === '09n') {
            setWeatherImg(drizzleImg);
          } else {
            setWeatherImg(cloudImg);
          }
        }
      }, [weather]);

      if (!weather || !weather.main) {
        return <h1 className='text-danger text-center py-3'>Not Found!</h1>;
    }
    const temperatureCelsius = weather.main.temp - 273.15;
  return (
    <Container className='py-3 d-flex flex-column justify-content-between align-items-center'>
        <div className="weatherImg d-flex justify-content-center">
            <img src={weatherImg} alt="" className='w-50 d-block' />
        </div>
        <div className="texts mt-2 text-center">
            <h2 className={styles.degree}>{temperatureCelsius.toFixed(0)} °C</h2>
            <h3 className={styles.city}>{weather.name}</h3>
            <h5>({weather.sys.country})</h5>
        </div>
        <div className="degreeInfo d-flex justify-content-between align-items-center w-100 mt-5">
            <div className="humidity d-flex justify-content-between align-items-start">
                <img src={humidityImg} className='d-block w-50' alt=""  />
                <div className="humidity-texts ms-3">
                    <p className='mb-0 fs-4'>{weather.main.humidity}%</p>
                    <p className='mb-0'>Humidity</p>
                </div>
            </div>
            <div className="wind d-flex justify-content-between align-items-start">
                <img src={windImg} className='d-block w-50' alt="" />
                <div className="wind-texts ms-3 ">
                    <p className='mb-0 fs-4'>{weather.wind.speed}Km/h</p>
                    <p className='mb-0'>Wind</p>
                </div>
            </div>
        </div>

    </Container>
  )
}

export default WeatherDegree