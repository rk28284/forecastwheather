import React from 'react'
import "../App.css"

export const WeatherIcon = ({ icon }) => {
  return (
    <div>
   <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon" />
    </div>
  )
}
