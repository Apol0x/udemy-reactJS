import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';


//arrow function es una funcion que se declara de forma flecha
// propia de ES6
const WeatherLocation = () => (
    <div className="weatherLocationCont"> 
        <Location city={"Madrid"}/>
        <WeatherData />
    </div>
);

export default WeatherLocation;