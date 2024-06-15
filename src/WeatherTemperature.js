import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperatue">
      <div className="Weather-app-temperature">{props.celcius}</div>
      <span className="Weather-app-unit">°C </span>
    </div>
  );
}
