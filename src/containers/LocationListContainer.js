import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import LocationList from '../components/LocationList';
import { setSelectedCity } from '../actions';

class LocationListContainer extends Component {
    handlerClickWeatherLocation = (cities) => {
        console.log("handlerClickWeatherLocation from App:", cities);
        this.props.setCity(cities)
    };
    render() {
        return (
            <LocationList
            cities={this.props.cities}
                onSelectWeatherLocation={this.handlerClickWeatherLocation}>
            </LocationList>
        );
    }

};

LocationListContainer.propTypes = {
    actionSetCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value))
});

export default connect(null, mapDispatchToProps)(LocationListContainer);