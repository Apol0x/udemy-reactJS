import { createStore } from 'redux';
import { city } from '../reducers/city.js';
const initialState = {
    city: null,
};


//Inicializamos la conexión con el redux-devtool
//y definimo el store
export const store = createStore(city,initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
