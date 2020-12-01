/**
 * Acciones que se van a ir controladon en el reducer
 */
import getForecastByCity from '../services/getForecastByCity';
import utilService from '../services/services.js'
import getWeatherByCity from '../services/getUrlWeatherByCity';
import axios from 'axios';

export const ACTIONS_CONSTANT = {
    SELECT_CITY_CONSULT: 'SELECT_CITY_CONSULT',
    SET_FORECAST_DATA: 'SET_FORECAST_DATA',
    GET_WEATHER_CITY: 'GET_WEATHER_CITY',
    SET_WEATHER_CITY: 'SET_WEATHER_CITY'
};
//generamos acciones
const actionSetCity = payload => ({ type: ACTIONS_CONSTANT.SELECT_CITY_CONSULT, payload });
const setForeCastData = payload => ({ type: ACTIONS_CONSTANT.SET_FORECAST_DATA, payload });
const setWeatherCity = payload => ({ type: ACTIONS_CONSTANT.SET_WEATHER_CITY, payload });
const getWeatherCity = payload => ({ type: ACTIONS_CONSTANT.GET_WEATHER_CITY, payload });

export const setSelectedCity = (payload) => {
    return async dispatch => {
        //activar en el estado un indicador de busqueda
        dispatch(actionSetCity(payload));

        try {
            const resp = await axios.post(getForecastByCity(payload));
            console.log("RESPONSE FORECAST BEFORE TRANSFORM: ", resp);
            const forecastData = utilService.getDataForecast(resp.data);
            //modificar estado con el resultado de la promise
            dispatch(setForeCastData({ city: payload, forecastData }));
        }
        catch (error) {
            console.error("[msg] error at or when: ", error);
        }
    }
};

export const setWeather = payload => {
    let apiCall = null;
    return dispatch => {
        payload.forEach(city => {
            apiCall = getWeatherByCity(city)
            dispatch(getWeatherCity(city));
            axios.post(apiCall).then((res) => {
                const weather = utilService.getDataFromResponse(res.data);
                dispatch(setWeatherCity({ city, weather }));
            }).catch(error => {
                console.error(error.status + "  msg: " + error.statusText);
            });
        })
    }
};