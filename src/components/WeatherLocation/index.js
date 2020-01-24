/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import CONSTANT from '../../config.js';

import './style.css';
import {
  CLOUDS,
  SUN,
  RAIN,
  SNOW,
  CLOUDY,
  WINDY
} from '../../constans/weather';
import weatherIcon from '../../constans/weather';

const location = "Seville,spa";
const api_key = CONSTANT.API_WEATHER_KEY;
const url_base_weather = CONSTANT.URL_BASE;
const api_call = `${url_base_weather}?q=${location}&units=metric&appid=${api_key}`;


const weatherData = {
  temperature: 5,
  weatherState: CLOUDY,
  humidity: 10,
  wind: "10 m/s",
};
//TODO: implement SOLID to organice files and code
class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = { //estado inicial del componente
      city: 'Buenos Aires',
      data: weatherData,
    }
  };

  getDataFromResponse = response => {
    const { temp, humidity } = response.main;
    const { main: iconWeather } = response.weather[0];
    const { speed } = response.wind;
    const dataReturn = {
      temperature: temp.toFixed(1),
      weatherState: weatherIcon[iconWeather.toUpperCase()],
      humidity: humidity,
      wind: `${speed} m/s`,
    };
    return dataReturn;
  };
 
  handleUpdateClick = () => {
    fetch(api_call).then(resolve => {
      return resolve.json();
    }).then(data => {
      const weatherNow = this.getDataFromResponse(data);
      this.setState({
        city: 'Sevilla',
        data: weatherNow,
      })
    }).catch(error => {
      console.error(error)
    });
  };
  render() {//primer render
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button> {/* evento onClick */}
      </div>
    );
  }
};

export default WeatherLocation;