import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [load, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      cityname: response.data.name,
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
  let searchForm = (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city…"
          autoFocus={true}
          onChange={updateCity}
          className="Enter-City"
        />
        <input type="submit" value="Search" className="Weather-Search" />
      </form>
    </div>
  );

  if (load) {
    return (
      <div className="Weather">
        {searchForm}
        <h2>{weather.cityname} </h2>
        <ul>
          <li>temperature: {Math.round(weather.temperature)} °C</li>
          <li>description: {weather.description}</li>
          <li>humidity: {weather.humidity} %</li>
          <li>wind: {Math.round(weather.wind)} m/s</li>
          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return searchForm;
  }
}
