import React from 'react';

const WeatherCard = ({ city, temperature,maxTemperature, minTemperature, weatherDescription }) => {
  return (
    <div className="weather-card">
      <h2 className='font-bold text-3xl'>{city}</h2>
      <p className='text-2xl'>Temperature:<span className='font-bold text-orange-400'> {temperature}</span>°F</p>
      <p className='text-2xl'>Maximum Temperature: <span className='font-bold text-red-500'> {maxTemperature} </span>°F</p>
      <p className='text-2xl'>Minimum Temperature:<span className='font-bold text-green-500'> {minTemperature} </span>°F</p>
      <p className='text-2xl'>Weather:<span className='font-bold text-fuchsia-500'> {weatherDescription} </span></p>
    </div>
  );
};

export default WeatherCard;
