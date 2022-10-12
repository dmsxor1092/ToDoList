const API_KEY = "4c2673fb439feaf8f5fe8cd0b4b0b50d";
const weather = document.querySelector(".weather span:first-child");
const city = document.querySelector(".weather span:last-child");
//const weatherIcon = document.querySelector('.weather-icon');
//const weatherDescription = document.querySelector('.weather-description');


function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //console.log(lat, lon);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}  ${Math.round(data.main.temp)}°C`;
      //   console.log(data.weather[0].id);
      //   weatherIcon.className = 'weather-icon owf';
      //  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      //  // weatherDescription.textContent = data.weather[0].description;
    });
}
function onGeoError() {
  alert("Can't find your location. Please try again later");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);