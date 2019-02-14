import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types";
import "./style.css";

const icons = {
  cloud: "cloud",
  cloudy: "cloudy",
  sun: "day-sunny",
  rain: "rain",
  snow: "snow",
  windy: "windy"
};
const getWeatherIcons = weatherState => {
  const icon = icons[weatherState];
  const sizeIcon = "4x";

  if (icon) return <WeatherIcons className="wicon" name={icon} size="2x" />;
  else return <WeatherIcons className="wicon" name="day-sunny" size="2x" />;
};
const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="wTempCont">
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
