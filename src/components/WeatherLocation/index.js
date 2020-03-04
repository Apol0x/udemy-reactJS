/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import utilService from '../../services/services.js';
import './style.css';
import getWeatherByCity from '../../services/getUrlWeatherByCity';
import axios from 'axios';

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props;
    this.state = {
      city: city,
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
    const API_CALL = getWeatherByCity(this.state.city);
    axios.post(API_CALL).then((res) => {
      const weatherNow = utilService.getDataFromResponse(res.data);
      this.setState({
        city: this.state.city,
        data: weatherNow,
      });

    }).catch(error => {
      console.error(error.status+"  msg: "+error.statusText);
    });
  };
  render() {
    console.info("componente renderizado")
    const { weatherLocationHandlerClick } = this.props;
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont" onClick={weatherLocationHandlerClick} >
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <CircularProgress />}

      </div>
    );
  }
};
WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  weatherLocationHandlerClick: PropTypes.func
}
export default WeatherLocation;