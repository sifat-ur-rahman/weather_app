import React from 'react';
import { useParams } from 'react-router-dom';

const WeatherDetails = () => {
  const { city } = useParams();

  // You can fetch more detailed weather data for the selected city here

  return (
    <div>
      <h2>Weather Details for {city}</h2>
      {/* Display additional weather information here */}
    </div>
  );
};

export default WeatherDetails;
