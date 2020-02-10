/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import getDataFromResponse from '../../services/services.js';
import './style.css';
import getWeatherByCity from '../../services/getUrlWeatherByCity';

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props;
    this.state = {
      city: city,
      data: null
    }
    console.info("constructor")
  };

  componentDidMount() {
    console.info(" componentDidMount componente se ha montado")
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps, prevState) {
    console.info("componentDidUpdate componente se ha actualizado")
  }

  componentWillUnmount() {
    console.info("componentWillUnmount componente se va a desmontar")
  }

  handleUpdateClick = () => {
    const API_CALL = getWeatherByCity(this.state.city);
    fetch(API_CALL).then(resolve => {
      return resolve.json();
    }).then(data => {
      const weatherNow = getDataFromResponse(data);
      this.setState({
        city: weatherNow.city,
        data: weatherNow,
      });

    }).catch(error => {
      console.error(error)
    });
  };
  render() {
    console.info("componente renderizado")
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <CircularProgress />}

      </div>
    );
  }
};
//TODO: REQUERIR LOS PROPTYPES QUE VAMOS A CONFIGURAR
WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
}
export default WeatherLocation;