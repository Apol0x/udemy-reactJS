/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import CONSTANT from '../../config.js';
import getDataFromResponse from '../../services/services.js';
import './style.css';
import {
  CLOUDS,
  SUN,
  RAIN,
  SNOW,
  CLOUDY,
  WINDY
} from '../../constans/weather';


const location = "Seville,spa";
const api_key = CONSTANT.API_WEATHER_KEY;
const url_base_weather = CONSTANT.URL_BASE;
const api_call = `${url_base_weather}?q=${location}&units=metric&appid=${api_key}`;


class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Buenos Aires',
      data: {
        temperature: 5,
        weatherState: CLOUDY,
        humidity: 10,
        wind: "10 m/s",
      },
    }
  };

  handleUpdateClick = () => {
    fetch(api_call).then(resolve => {
      return resolve.json();
    }).then(data => {
      const weatherNow = getDataFromResponse(data);
      this.setState({
        city: 'Sevilla',
        data: weatherNow,
      });

    }).catch(error => {
      console.error(error)
    });
  };
  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
};

export default WeatherLocation;