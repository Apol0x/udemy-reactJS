/**
 * Acciones que se van a ir controladon en el reducer
 */
import axios from 'axios';
import getForecastByCity from '../services/getForecastByCity';
import utilService from '../services/services.js'

export const ACTIONS_CONSTANT = {
    SELECT_CITY_CONSULT: "SELECT_CITY_CONSULT",
    SET_FORECAST_DATA: "SET_FORECAST_DATA",
};
//generamos acciones
const actionSetCity = payload => ({ type: ACTIONS_CONSTANT.SELECT_CITY_CONSULT, payload });
const setForeCastData = payload => ({ type: ACTIONS_CONSTANT.SET_FORECAST_DATA, payload});

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
}