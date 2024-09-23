
import React from 'react';
import { WeatherIcon } from './WeatherIcon';



export const ForecastCard = ({ day, unit }) => {
    const convertTemp = (temp, unit) => {
        if (unit === 'F') {
          return (temp * 9/5) + 32;
        }
        return temp;
      };
    
      const getDayOfWeek = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleString('en-US', { weekday: 'long' });
      };
    return (
        <div className="forecast-card">
          <p>{getDayOfWeek(day.dt)}</p>
          <WeatherIcon icon={day.weather[0].icon} />
          <p>High: {convertTemp(day.temp.max, unit).toFixed(1)}°{unit}</p>
          <p>Low: {convertTemp(day.temp.min, unit).toFixed(1)}°{unit}</p>
        </div>
      );
}

