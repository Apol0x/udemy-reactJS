import React, { Component } from "react";
import PropTypes from 'prop-types';
import WeatherLocation from "./WeatherLocation";

class ForeCastExtended extends Component {
   
    render(){
        return(
            <div>
                <h2 className="forecast-title">Pronóstico extendido para {this.props.city}</h2>
                <WeatherLocation city={this.props.city}></WeatherLocation>
                
            </div>
        )
    }
};

ForeCastExtended.propTypes = {
    city: PropTypes.string.isRequired,
  }

export default ForeCastExtended;