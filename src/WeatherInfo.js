import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Weather-data">
        <div className="row">
          <div className="col-6 ">
            <h1 className="Weather-app-city">{props.data.city}</h1>
            <p className="Weather-app-details">
              <FormattedDate date={props.data.date} />,
              <span className="text-capitalize">{props.data.condition}</span>{" "}
              <br /> Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
              <strong>{props.data.wind}km/h</strong>
            </p>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-8">
            <div className="Weather-temperature-container d-flex justify-content-end">
              <img
                src={props.data.iconUrl}
                alt={props.data.condition}
                className="Weather-app-icon"
              />
              <div className="Weather-app-temperature">
                {props.data.temperature}
              </div>
              <div className="Weather-app-unit">°C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
