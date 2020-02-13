import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import "./style.css";

const getWeatherIcons = weatherState => {
  const icon = weatherState;
  const sizeIcon = "4x";
  if (icon){
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
  }else {
    return <WeatherIcons className="wicon" name="day-sunny" size={sizeIcon} />;
  };
};
const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="weatherTemperatureCont">
    {getWeatherIcons(weatherState)}
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperatureType">{`ºC`}</span>
  </div>
);
WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired, // definimos que temperature será numerico
  weatherState: PropTypes.string.isRequired // definimos que weatherState será string
};
export default WeatherTemperature;
