import "./App.css";
import "./weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 13:22",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form id="search-form" className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Please enter a city"
                  classNames="form-control"
                  id="city-input"
                  autocomplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <div className="overview">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>Last updated: {weatherData.date}</li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="float-left"
                />
                <div className="float-left">
                  <strong>{weatherData.temperature}</strong>
                  <span className="units">
                    <a href="/">°C</a> | <a href="/">°F</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </div>

        <small class="source">
          {" "}
          <a
            href="https://github.com/aworkconsulting/react-app-weather"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Open Source code
          </a>{" "}
          by Emelie Jansson
        </small>
      </div>
    </div>
  );
}
