import React, { Component } from "react";
import PropTypes from 'prop-types';
import ForeCastItem from "./ForeCastItem";
import axios from 'axios';
import getForecastByCity from '../services/getForecastByCity';
import utilService from '../services/services.js'

class ForeCastExtended extends Component {
    constructor() {
        super();
        this.state = {
            forecastData: null,
        }
    }

    componentDidMount() {
        this.updateCity(this.props.city)
    }

    
    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city){
            this.setState({forecastData: null})
            this.updateCity(nextProps.city)
        }
    }

    updateCity = (city) => {
        axios.post(getForecastByCity(city))
            .then((resp) => {
                console.log("RESPONSE FORECAST BEFORE TRANSFORM: ", resp)
                this.setState({
                    forecastData: utilService.getDataForecast(resp.data),
                });
            })
            .catch(function (error) {
                console.error("[msg] error at or when: ", error)
            });
    }

    renderForeCastItem(forecastData) {
        console.log("estado de forecastData: ", this.state.forecastData)
        return forecastData.map((forecast, index) => (
            <ForeCastItem
                key={index}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}>
            </ForeCastItem>));
    }

    renderProgress() {
        return <h3>Cargando...</h3>;
    }
    render() {
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className="forecast-title">Pronóstico extendido para {this.props.city}</h2>
                {forecastData != null ? this.renderForeCastItem(forecastData) : this.renderProgress()}
            </div>
        )
    }
};

ForeCastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForeCastExtended;