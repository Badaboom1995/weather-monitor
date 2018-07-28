import React from "react";
import DeleteButton from './DeleteButton.js';
import AddCity from './AddCity.js';
import {deleteCity} from '../actions/actions.js';


const WeatherBlock = props => (
    <div className="weather-block">
            {props.areasToShow.map(item => (
                <div className="weather-block__item"  key={item.name}>
                <h2 className="weather-block__city-name">
                    {"main" in item ? item.name : "Loading..."}
                </h2>
                <p className="weather-block__current-temperature">
                    {"main" in item
                    ? `${parseInt(item.main.temp - 273)}℃`
                    : "Loading..."}
                </p>
                <DeleteButton deleteFunc={() => deleteCity(item.name)} />
                </div>
            ))}
            <div className="weather-block__item weather-block__item--add">
                <AddCity/>
            </div>
        </div>
)


export default WeatherBlock;