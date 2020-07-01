import { ACTIONS_CONSTANT } from '../actions/index.js';
/**
 * Aquí crearemos la función que recogerá los cambios de 
 * estados que se vayan lanzando en la acción para pasarselas
 * al reducer
 * @param {Estado de la acción} state 
 * @param {Accion que se va a controlar} action 
 */

const { SELECT_CITY_CONSULT } = ACTIONS_CONSTANT;
export const city = (state = {}, action) => {
    switch (action.type) {
        case SELECT_CITY_CONSULT:
            return  action.payload ;
        default:
            return state;
    }
};
