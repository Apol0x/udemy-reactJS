import React, { Component } from "react";
import PropTypes from 'prop-types';
import WeatherLocation from "./WeatherLocation";

class ForeCastExtended extends Component {
   
    render(){
        return(
            <div>
                <WeatherLocation city={this.props.city}></WeatherLocation>
                {this.props.city}
            </div>
        )
    }
};

ForeCastExtended.propTypes = {
    city: PropTypes.string.isRequired,
  }

export default ForeCastExtended;