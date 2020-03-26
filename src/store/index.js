import { createStore } from 'redux';
//Inicializamos la conexión con el redux-devtool
//y definimo el store
export const store = createStore(() => { },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
