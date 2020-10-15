import { ACTIONS_CONSTANT } from '../actions/index.js';
/**
 * Aquí crearemos la función que recogerá los cambios de 
 * estados que se vayan lanzando en la acción para pasarselas
 * al reducer
 * @param {Estado de la acción} state 
 * @param {Accion que se va a controlar} action 
 */
const { SET_FORECAST_DATA } = ACTIONS_CONSTANT;
export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA:
            const { city, forecastData } = action.payload;
            return { ...state, [city]:{ forecastData }};
        default:
            return state;
    }
};

export const getForecastDataFromCities = (state, city) => state[city] && state[city].forecastData;