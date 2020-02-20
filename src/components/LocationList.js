import React from "react";
import PropTypes from 'prop-types';
import WeatherLocation from '../components/WeatherLocation';

const LocationList = ({ cities, onSelectWeatherLocation }) => {

    const handlerWeatherLocationClick = (city) => {
        console.log("HANDLERWEATHERLOCATIONCLICK: ", city);
        onSelectWeatherLocation(city)
    };
    
    const cityList = cities => {
        return (
            cities.map((cityMapped, index) =>
                <WeatherLocation
                    key={index}
                    city={cityMapped}
                    weatherLocationHandlerClick={() => handlerWeatherLocationClick(cityMapped)} />
            )
        );
    };
    return (
        <div>
            {cityList(cities)}
        </div>
    );

};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectWeatherLocation: PropTypes.func
};

export default LocationList;