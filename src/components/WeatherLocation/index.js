/* eslint-disable no-useless-constructor */
import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';

/**
 * Componente Funcional sin estado de la temperatura de una ciudad
 * @param {Destructuring props} param0 
 */
const WeatherLocation = ({ weatherLocationHandlerClick, city, data }) => (
  <div className="weatherLocationCont" onClick={weatherLocationHandlerClick} >
    <Location city={city} />
    { data ? <WeatherData data={data} /> : <CircularProgress />}
  </div>
);
WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  weatherLocationHandlerClick: PropTypes.func,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  })
}
export default WeatherLocation;