import React from "react";
import "./App.css";

export default function WeatherData() {
  return (
    <div className="Weather-app-data">
      <div>
        <h1 className="Weather-app-city">Paris</h1>
        <p className="Weather-app-details">
          <span>Sunday 18:08</span> , <span>few clouds</span> <br /> Humidity:{" "}
          <strong>54%</strong>, Wind: <strong>3.6km/h</strong>
        </p>
      </div>
      <div>
        <div className="Weather-temperature-container">
          <img
            src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
            alt=""
            className="Weather-app-icon"
          />
          <div className="Weather-app-temperature">21</div>
          <div className="Weather-app-unit">°C</div>
        </div>
      </div>
    </div>
  );
}
