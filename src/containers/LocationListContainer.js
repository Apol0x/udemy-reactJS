import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import LocationList from '../components/LocationList';
import { getWeatherCities, getCity } from '../reducers'
import { setSelectedCity, setWeather } from '../actions';

class LocationListContainer extends Component {
    componentDidMount() {
        const {setWeather, setCity, cities, city} = this.props;
        setWeather(cities);
        setCity(city);
    }
    handlerClickWeatherLocation = (cities) => {
        console.log("handlerClickWeatherLocation from App:", cities);
        this.props.setCity(cities)
    };
    render() {
        return (
            <LocationList
                cities={this.props.citiesWeather}//cuando le cambio cities a getWeatherCities falla
                onSelectWeatherLocation={this.handlerClickWeatherLocation}>
            </LocationList>
        );
    }

};

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array
};

const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
});
const mapStateToProps = state => ({ citiesWeather: getWeatherCities(state), city: getCity(state) });

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);