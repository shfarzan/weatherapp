function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function displayWeather(response) {
  let tempElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionELEMENT = document.querySelector("#description");
  let humidityELEMENT = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");

  descriptionELEMENT.innerHTML = response.data.weather[0].description;
  tempElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  humidityELEMENT.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute(
    "src",
    ` https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  iconElement.setAttribute("alt", response.data.weather[0].description);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
let city = "Tehran";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayWeather);
