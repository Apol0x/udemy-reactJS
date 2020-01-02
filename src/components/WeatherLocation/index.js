import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import {
    /* CLOUD,
    CLOUDY,
    SUN,
    RAIN, */
    SNOW,
    /* WINDY, */
  } from '../../constans/weather';

  const dataWeatherData = {
    temperature: 5,
    weatherState: SNOW,
    humidity: 10,
    wind: "10 m/s",
  };

//arrow function es una funcion que se declara de forma flecha
// propia de ES6
const WeatherLocation = () => (
    <div className="weatherLocationCont"> 
        <Location city={"Madrid"}/>
        <WeatherData data={dataWeatherData}/>
    </div>
);

export default WeatherLocation;