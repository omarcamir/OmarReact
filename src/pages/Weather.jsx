import React from 'react'
import WeatherCard from '../components/WeatherCard/WeatherCard'
import { Helmet } from 'react-helmet'

const Weather = () => {
  return (
    <>
      <Helmet>
        <title>OMAR - Weather</title>
      </Helmet>
    <WeatherCard/>
    </>
  )
}

export default Weather