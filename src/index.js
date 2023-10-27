function displayWeather(response) {
  let tempElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionELEMENT = document.querySelector("#description");
  let humidityELEMENT = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  descriptionELEMENT.innerHTML = response.data.weather[0].description;
  tempElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  humidityELEMENT.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayWeather);
