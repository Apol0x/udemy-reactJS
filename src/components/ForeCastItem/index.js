import React from "react";
import PropTypes from 'prop-types';
import WeatherData from "../WeatherLocation/WeatherData";

const ForeCastItem = ({ weekDay, hour, data }) => {
    return (
        <div>
            <div>{weekDay != null ? weekDay : null} Hora: {hour}</div>
            <WeatherData data={data}></WeatherData>
        </div>

    );
}
ForeCastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
      })
}
export default ForeCastItem;