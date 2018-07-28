import React from "react";
import WeatherBlock from './WeatherBlock.js';
import { httpGet, getCoords, getArea } from '../services/services.js'
import { observer } from 'mobx-react';
import menuStore from '../store/store.js';
import {setHomeLocation, setDefaultCityes} from '../actions/actions.js';
import uuid from 'uuid';




@observer export default class Home extends React.Component {
  state = {
    localWeather: false,
    coord: {},
    areasToShow: [
      {
        name: "Kiev.",
        coord: {
          lon: 30.516666,
          lat: 50.433334
        }
      },
      {
        name: "Norilsk",
        coord: {
          lon: 88.202698,
          lat: 69.3535
        }
      },
      {
        name: "Cherepovets.",
        coord: {
          lon: 37.900002,
          lat: 59.133331
        }
      }
    ]
  };

  componentDidMount() {
    setHomeLocation();
    setDefaultCityes();
  }

  setDefaultCityes = () => {
    Promise.all(
        this.state.areasToShow.map(item => {
          return getArea(item);
        })
      )
        .then(response =>
          response.map(json => {
            return JSON.parse(json);
          })
        )
        .then(parsedJSON => {
          this.setState(() => ({
            areasToShow: parsedJSON
          }));
        });
  }

  deleteCity = cityToDelete => {
    this.setState(prevState => ({
      areasToShow: prevState.areasToShow.filter(area => {
        return cityToDelete != area.name;
      })
    }));
  };

  render() {
    return (
      <div className="container">
        <HomeLocation weather = {menuStore.state.weather}/>
        <WeatherBlock areasToShow = {menuStore.state.areasToShow}  deleteCity = {this.deleteCity}/>
        {console.log(menuStore.state)}
      </div>
    );
  }
}

const HomeLocation = props => (
     <div className="home">
        <p className="home__title">Your home location:</p>
        <p className="home__location">
        {props.weather ? props.weather.name : "loading..."}
        </p>
        <p className="home__temperature">
        {props.weather ? `${(parseInt(props.weather.main.temp - 273))}℃` : (<img className='home__preloader' src="/loader.gif" alt="" />)}
        </p>
    </div>
)