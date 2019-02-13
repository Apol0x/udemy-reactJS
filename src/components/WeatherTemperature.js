import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

 const icons = {
    cloud: "cloud",
    cloudy: "cloudy",
    sun: "day-sunny",
    rain: "rain",
    snow: "snow",
    windy: "windy",
} 
const getWeatherIcons = (weatherState) => {
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons name={icon} size="2x" />
    else
        return <WeatherIcons name="day-sunny" size="2x" />
}
const WeatherTemperature = ({ temperature, weatherState }) => (

    <div>
        {getWeatherIcons(weatherState)}
        <span>{`${temperature} ºC`}</span>
    </div>
)
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired, // definimos que temperature será numerico
    weatherState: PropTypes.string.isRequired, // definimos que weatherState será string
}
export default WeatherTemperature;