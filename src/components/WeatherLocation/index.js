/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import CONSTANT from '../../config.js';

import './style.css';
import {
  /* CLOUD,
  CLOUDY,
  SUN,
  RAIN, */
  SNOW,
  CLOUDY,
  /* WINDY, */
} from '../../constans/weather';

const location = "Seville,spa";
const api_key = CONSTANT.API_WEATHER_KEY;
const url_base_weather = CONSTANT.URL_BASE;
const api_call = `${url_base_weather}?q=${location}&appid=${api_key}`;


const weatherData = {
  temperature: 5,
  weatherState: CLOUDY,
  humidity: 10,
  wind: "10 m/s",
};

const data2 = {
  temperature: 27,
  weatherState: SNOW,
  humidity: 20,
  wind: "20 m/s",
};

//arrow function es una funcion que se declara de forma flecha
// propia de ES6
class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = { //estado inicial del componente
      city: 'Buenos Aires',
      data: weatherData,
    }
  };

  handleUpdateClick = () => {
    fetch(api_call);
    console.log("actualizado");
    this.setState({
      /* cuando es llamado el método setea el estado lo que hace que
      detecte que el estado ha cambiado y pase por render de nuevo */
      city: 'Cadiz',
      data: data2,
      /* no haría falta pasar todos los campos que se van a actualizar.
      con volver a pasar el objeto detectará los campos que se han cambiado. */
    })
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