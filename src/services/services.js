

export const httpGet = url => {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);

      xhr.onload = function() {
        if (this.status == 200) {
          resolve(this.response);
        } else {
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };

      xhr.onerror = function() {
        reject(new Error("Network Error"));
      };
      xhr.send();
    });
  };

  export const getCoords = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(position => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      });
    });
  };

  export const getArea = item => {
    return new Promise((resolve, reject) => {
      const area = httpGet(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          item.coord.lat
        }&lon=${item.coord.lon}&APPID=f84233c2e5393d2ed7cace1cbf0fc4eb`
      );
      resolve(area);
    });
  };

