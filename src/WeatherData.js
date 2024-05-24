import React, { useState } from "react";
import axios from "axios";

import "./App.css";

export default function WeatherData() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setTemperature(response.data.temperature.current);
    setReady(true);
  }

  if (ready) {
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
        <div className="Weather-data">
          <div className="row">
            <div className="col-6 ">
              <h1 className="Weather-app-city">Paris</h1>
              <p className="Weather-app-details">
                <span>Sunday 18:08</span> , <span>few clouds</span> <br />{" "}
                Humidity: <strong>54%</strong>, Wind: <strong>3.6km/h</strong>
              </p>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-8">
              <div className="Weather-temperature-container d-flex justify-content-end">
                <img
                  src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                  alt=""
                  className="Weather-app-icon"
                />
                <div className="Weather-app-temperature">
                  {Math.round(temperature)}
                </div>
                <div className="Weather-app-unit">°C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `ff78a26b4036a4f5fe4410t0440oa505`;
    let city = `New York`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ....";
  }
}
