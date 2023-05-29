import React from 'react';

const WeatherCard = ({ city, temperature,maxTemperature, minTemperature, weatherDescription }) => {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <p>Temperature: {temperature}°F</p>
      <p>Maximum Temperature: <span> {maxTemperature} </span>°F</p>
      <p>Minimum Temperature:<span> {minTemperature} </span>°F</p>
      <p>Weather:<span> {weatherDescription} </span></p>
    </div>
  );
};

export default WeatherCard;
