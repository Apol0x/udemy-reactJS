import { ACTIONS_CONSTANT } from '../actions/index.js';
import { createSelector } from "reselect";
import _ from 'lodash';
/**
 * Aquí crearemos la función que recogerá los cambios de 
 * estados que se vayan lanzando en la acción para pasarselas
 * al reducer
 * @param {Estado de la acción} state 
 * @param {Accion que se va a controlar} action 
 */
const {
    SET_FORECAST_DATA,
    GET_WEATHER_CITY,
    SET_WEATHER_CITY
} = ACTIONS_CONSTANT;
export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA: {
            const { city, forecastData } = action.payload;
            return { ...state, [city]: { ...state[city], forecastData, forecastDataDate: new Date() } };
        };
        case GET_WEATHER_CITY: {
            const city = action.payload;
            return { ...state, [city]: { ...state[city], weather: null } }
        };
        case SET_WEATHER_CITY: {
            const { city, weather } = action.payload;
            return { ...state, [city]: { ...state[city], weather } }
        };

        default:
            return state;
    }
};
const fromObjToArray = cities => (_.toPairs(cities).map(([key, value]) => ({ key, name: key, data: value.weather })));

export const getForecastDataFromCities = createSelector(
    (state, city) => state[city] && state[city].forecastData, forecastData => forecastData
);
export const getWeatherCities = createSelector(
    state => fromObjToArray(state), cities => cities
);
