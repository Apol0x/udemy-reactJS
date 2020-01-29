/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import CONSTANT from '../../config.js';
import getDataFromResponse from '../../services/services.js';
import './style.css';


const location = "Seville,spa";
const api_key = CONSTANT.API_WEATHER_KEY;
const url_base_weather = CONSTANT.URL_BASE;
const api_call = `${url_base_weather}?q=${location}&units=metric&appid=${api_key}`;

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: '--',
      data: null
    }
    console.info("constructor")
  };

  componentDidMount() {
    console.info(" componentDidMount componente se ha montado")
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps, prevState) {
    console.info("componentDidUpdate componente se ha actualizado")
  }

  componentWillUnmount() {
    console.info("componentWillUnmount componente se va a desmontar")
  }

  handleUpdateClick = () => {
    fetch(api_call).then(resolve => {
      return resolve.json();
    }).then(data => {
      const weatherNow = getDataFromResponse(data);
      this.setState({
        city: weatherNow.city,
        data: weatherNow,
      });

    }).catch(error => {
      console.error(error)
    });
  };
  render() {
    console.info("componente renderizado")
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <CircularProgress />}
        
      </div>
    );
  }
};

export default WeatherLocation;