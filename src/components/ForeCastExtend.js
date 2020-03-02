import React, { Component } from "react";
import PropTypes from 'prop-types';
import WeatherLocation from "./WeatherLocation";
import ForeCastItem from "./ForeCastItem";
import axios from 'axios';
import getForecastByCity from '../services/getForecastByCity';
/* const weekDays = [
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
} */


class ForeCastExtended extends Component {
    constructor() {
        super();
        this.state = {
            forecastData: null,
        }
    }
    componentDidMount() {
        axios.post(getForecastByCity(this.props.city))
        .then((resp) => {
            this.setState({
                forecastData: resp.data,
            });
        })
        .catch(function(error){
            console.error("[msg] error at or when: ", error)
        });
    }

    renderForeCastItem() {
        console.log("estado de forecastData: ", this.state.forecastData)
        return "Render Items";
        //return days.map((dayWeek, index) => (<ForeCastItem key={index} weekDay={dayWeek} hour={10}data={data}></ForeCastItem> ));
    }

    renderProgress() {
        return <h3>Cargando...</h3>;
    }
    render() {
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className="forecast-title">Pronóstico extendido para {this.props.city}</h2>
                <WeatherLocation city={this.props.city}></WeatherLocation>
                {forecastData != null ? this.renderForeCastItem() : this.renderProgress()}
            </div>
        )
    }
};

ForeCastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForeCastExtended;