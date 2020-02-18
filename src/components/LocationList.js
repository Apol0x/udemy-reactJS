import React from "react";
import PropTypes from 'prop-types';
import WeatherLocation from '../components/WeatherLocation';

const cityList = cities => {
    return (
        cities.map((cityMapped, index) =>
            <WeatherLocation key={index} city={cityMapped} />
        )
    );
};
const LocationList = ({ cities }) => {

    return (
        <div>
            {cityList(cities)}
        </div>
    );

};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired
};

export default LocationList;