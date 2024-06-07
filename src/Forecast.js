import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  return (
    <div className="Weather-forecast">
      <div className="Forecast-day">
        <div className="Forecast-date">Sun</div>
        <WeatherIcon code={"clear-sky-day"} size={80} />
        <div className="Forecast-temperatures">
          <div className="Forecast-temperature">
            <strong>33°</strong>
          </div>
          <div className="Forecast-temperature">28°</div>
        </div>
      </div>
    </div>
  );
}
