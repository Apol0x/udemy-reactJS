import React from "react";
import PropTypes from 'prop-types';
import ForeCastItem from "./ForeCastItem";


const renderForeCastItem = (forecastData) => {
    //console.log("estado de forecastData: ", this.state.forecastData)
    return forecastData.map((forecast, index) => (
        <ForeCastItem
            key={index}
            weekDay={forecast.weekDay}
            hour={forecast.hour}
            data={forecast.data}>
        </ForeCastItem>));
}

const renderProgress = () => {
    return <h3>Cargando...</h3>;
}
const ForeCastExtended = ({ city, forecastData }) => (
    <div>
        <h2 className="forecast-title">Pronóstico extendido para {city}</h2>
        {forecastData != null ? renderForeCastItem(forecastData) : renderProgress()}
    </div>
);
    

ForeCastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
}

export default ForeCastExtended;