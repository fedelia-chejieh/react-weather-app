import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <div className="WeatherTemperatue">
        <div className="Weather-app-temperature">{props.celcius}</div>
        <span className="Weather-app-unit">
          <a href="/" onClick={showFahrenheit}>
            °C{" "}
          </a>
          |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperatue">
        <div className="Weather-app-temperature">{Math.round(fahrenheit)}</div>
        <span className="Weather-app-unit">
          <a href="/" onClick={showCelcius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
