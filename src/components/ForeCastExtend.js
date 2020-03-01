import React, { Component } from "react";
import PropTypes from 'prop-types';
import WeatherLocation from "./WeatherLocation";
import ForeCastItem from "./ForeCastItem";

const weekDays = [
    "LUNES",
    "MARTES",
    "MIERCOLES",
    "JUEVES",
    "VIERNES",
    "SABADO",
    "DOMINGO",
];

const data = {
    temperature: 22,
    humidity: 15,
    weatherState: "normal",
    wind: "normal"
}

class ForeCastExtended extends Component {
   renderForeCastItem(days) {
       return days.map((dayWeek, index) => (<ForeCastItem key={index} weekDay={dayWeek} hour={10}data={data}></ForeCastItem> ));
   }
    render(){
        return(
            <div>
                <h2 className="forecast-title">Pronóstico extendido para {this.props.city}</h2>
                <WeatherLocation city={this.props.city}></WeatherLocation>
                {this.renderForeCastItem(weekDays)}
            </div>
        )
    }
};

ForeCastExtended.propTypes = {
    city: PropTypes.string.isRequired,
  }

export default ForeCastExtended;