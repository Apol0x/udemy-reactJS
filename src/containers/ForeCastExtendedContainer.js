import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import ForeCastExtend from '../components/ForeCastExtend.js';
import {getForecastDataFromCities, getCity} from "../reducers";

class ForeCastExtendedContainer extends Component {
    render() {
        const {city, forecastData} = this.props;
        return (
            city  ? <div className="details">
                <ForeCastExtend city={city} forecastData={forecastData} />
            </div> : null
        
        )
    }
};

ForeCastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
    
}
const mapStateToProps = state => ({ city: getCity(state), forecastData: getForecastDataFromCities(state) });
export default connect(mapStateToProps, null)(ForeCastExtendedContainer);