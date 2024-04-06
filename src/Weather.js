import React, { useState } from "react";
import DateUpdated from "./DateUpdated";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      humidity: response.data.main.humidity,
    });
  }

  if (weather.ready) {
    const apiKey = "7d478f69e1b2f5d563653f13f5f91d76";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
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
        <h1>{weather.city}</h1>
        <ul>
          <li>
            <DateUpdated date="weather.date" />
          </li>
          <li className="text-capitalize">{weather.description}</li>
        </ul>
        <div className="row">
          <div className="col-6 mt-3">
            <div className="clearfix">
              <img
                src={weather.iconUrl}
                alt={weather.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weather.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "7d478f69e1b2f5d563653f13f5f91d76";
    let city = "Paris";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
