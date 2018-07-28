import { observable } from 'mobx';

class MenuStore {
  @observable state;
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
}

export default new MenuStore;
export {MenuStore}



