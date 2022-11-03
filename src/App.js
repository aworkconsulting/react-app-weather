import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "ca2c5297af3e10f6430a712560f08ff1";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Please enter a city"
          onChange={updateCity}
        />
        <button type="Submit">Search</button>
      </form>
      <h2>
        Stockholm {""}
        <img src={weather.icon} alt={weather.description} />
      </h2>
      <ul>
        <li>Temperature: {Math.round(weather.temperature)}°C</li>
        <li>Description: {weather.description}</li>
        <li>Humidity: {Math.round(weather.humidity)}%</li>
        <li>Wind: {Math.round(weather.wind)}km/h</li>
      </ul>
    </div>
  );
}
