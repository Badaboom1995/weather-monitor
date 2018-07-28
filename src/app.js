import ReactDOM from 'react-dom';
import React from 'react';
import 'normalize.css/normalize.css' ;
import './styles/styles.scss';
import AppRouter from './routers/AppRouter.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const WeatherReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
        return {
            key:'value'
        }
        default:
            return state
    }
}

const store = createStore(WeatherReducer);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("root"));