import React, { useState } from 'react';
import './App.css';
import WeatherForm from './WeatherForm';
import axios from 'axios';
import WeatherCard from './WeatherCard';

const WeatherApp = () => {
    const [weatherData, setWeatherData]= useState(null)
    const [isLoading, setIsLoading]= useState(false)
    const [error, setError]= useState(null)
    const [cityInput, setCityInput] = useState('');
    // console.log(weatherData);
    const fetchWeatherData = async (city) => {
      try {
        setIsLoading(true);
  
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=befc3cd4fdf7535bb2d9259d62ac6af5`
        );
  
        setWeatherData(response.data);
        setIsLoading(false);
        setError(null);
        setCityInput('')
      } catch (error) {
        setError('Error fetching weather data.');
        setIsLoading(false);
        setWeatherData(null);
        setCityInput('');
      }
    };
    const handleFormSubmit = (e) => {
      e.preventDefault();
      fetchWeatherData(cityInput);
    };
    const handleInputChange = (e) => {
      setCityInput(e.target.value);
    };

    return (
        <div className='weather-app App'>
            <h1 className='font-bold text-5xl my-5'>Weather App</h1>
            <WeatherForm onSubmit={handleFormSubmit} value={cityInput}
        onChange={handleInputChange} />
            {isLoading && <progress className="progress w-96"></progress>}
            {error && <p className='text-2xl font-bold text-red-700'>{error}</p>}
            {weatherData && (
                <WeatherCard 
                city={weatherData.name}
                temperature={weatherData.main.temp}
                maxTemperature={weatherData.main.temp_max}
                minTemperature={weatherData.main.temp_min}
                weatherDescription={weatherData.weather[0].description}
                />
            )}
        </div>

    );
};

export default WeatherApp;