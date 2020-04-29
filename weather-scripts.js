let city = "amsterdam"
const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fccb4d8f180e1ef03d3a8c1d3f2be9e4&units=metric`;

let cityTitle = document.querySelector(".city1-name");
let weatherType = document.querySelector(".weather-type");
let temperature = document.querySelector(".temperature");
let windSpeed = document.querySelector(".wind-speed");

fetch(api)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    weatherType.textContent = data.weather[0].description;
    temperature.textContent = Math.round(data.main.temp) + " C°";
    windSpeed.textContent = data.wind.speed + " m/s";
    cityTitle.textContent = data.name;

// Adding a dynamically created weather icon:
    let weatherTypeIconElement = document.querySelector(".weather-type-icon");
    let iconImage = document.createElement("img");
    let icon = data.weather[0].icon;

    iconImage.src = `http://openweathermap.org/img/wn/${icon}.png`;
    weatherTypeIconElement.appendChild(iconImage);


  })
