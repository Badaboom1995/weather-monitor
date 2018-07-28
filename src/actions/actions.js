import menuStore from '../store/store.js';
import { httpGet, getCoords, getArea } from '../services/services.js'

export const setHomeLocation = () => {
  getCoords()
  .then(response => { 
    menuStore.state.coord = response;
    return {coord: response}
  })
  .then(coord =>
    httpGet(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        menuStore.state.coord.lat
      }&lon=${menuStore.state.coord.lon}&APPID=f84233c2e5393d2ed7cace1cbf0fc4eb`
    )
  )
  .then(response => JSON.parse(response))
  .then(json => { 
    menuStore.state.weather = json
   });
} 

export const setDefaultCityes = () => {
  Promise.all(
    menuStore.state.areasToShow.map(item => {
      
        return getArea(item);
      })
    )
      .then(response =>
        response.map(json => {
          
          return JSON.parse(json);
        })
      )
      .then(parsedJSON => { 
        console.log('hi');
        menuStore.state.areasToShow = parsedJSON
      });
}

export const addCity = event => {
  event.preventDefault();
  const cityName = event.target.elements.city.value.trim();
  httpGet(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=f84233c2e5393d2ed7cace1cbf0fc4eb`
  )
    .then(response => JSON.parse(response))
    .then(json => {
      menuStore.state.areasToShow = [
        ...menuStore.state.areasToShow,
        json
      ]
    });
  event.target.elements.city.value = "";
};

export const deleteCity = cityToDelete => {
  // this.setState(prevState => ({
  //   areasToShow: prevState.areasToShow.filter(area => {
  //     return cityToDelete != area.name;
  //   })
  // }));
  menuStore.state.areasToShow = menuStore.state.areasToShow.filter( area => {
    return cityToDelete != area.name;
  })
};