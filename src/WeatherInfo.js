import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Weather-data">
        <div className="row">
          <div className="col-6 ">
            <h1 className="Weather-app-city">{props.data.city}</h1>
            <p className="Weather-app-details">
              <FormattedDate date={props.data.date} />,{" "}
              <span className="text-capitalize">{props.data.condition}</span>{" "}
              <br /> Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
              <strong>{props.data.wind}km/h</strong>
            </p>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-8">
            <div className="Weather-temperature-container d-flex justify-content-end">
              <div className="clearfix">
                <div className="float-left">
                  <WeatherIcon code={props.data.icon} />
                </div>
              </div>

              <WeatherTemperature celcius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
