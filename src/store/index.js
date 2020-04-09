import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { city } from '../reducers/city.js';
const initialState = {
    city: null,
};
//composición potenciada  para unir el middleware con el redux_devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Inicializamos la conexión con el redux-devtool
//y exportamos la definición del store
export const store = createStore(city, initialState, composeEnhancers(applyMiddleware(thunk)));
