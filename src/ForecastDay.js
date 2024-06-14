import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-date">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={80} />
      <div className="Forecast-temperatures">
        <div className="Forecast-temperature">
          <strong>{maxTemperature()}</strong>
        </div>
        <div className="Forecast-temperature">{minTemperature()}</div>
      </div>
    </div>
  );
}
