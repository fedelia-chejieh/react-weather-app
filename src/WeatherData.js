import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./App.css";

export default function WeatherData(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.city,
      iconUrl: `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png`,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      condition: response.data.condition.description,
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <header className="Weather-header">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="Search-input"
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
        </header>
        <WeatherInfo data={WeatherData} />
      </div>
    );
  } else {
    const apiKey = `ff78a26b4036a4f5fe4410t0440oa505`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ....";
  }
}
