/**
 * Acciones que se van a ir controladon en el reducer
 */
export const ACTIONS_CONSTANT = {
    SELECT_CITY_CONSULT: "SELECT_CITY_CONSULT",
};
//generamos acciones
export const actionSetCity = (payload) => ({ type: ACTIONS_CONSTANT.SELECT_CITY_CONSULT, payload }) 