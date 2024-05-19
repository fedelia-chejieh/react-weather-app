import React from "react";

export default function Forecast() {
  return (
    <div className="Weather-forecast">
      <div className="Forecast-day">
        <div className="Forecast-date">Sun</div>
        <img
          src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
          alt=""
          className="Forecast-icon"
        />
        <div className="Forecast-temperatures">
          <div className="Forecast-temperature">
            <strong>33°</strong>
          </div>
          <div className="Forecast-temperature">28°</div>
        </div>
      </div>
      <div className="Forecast-day">
        <div className="Forecast-date">Mon</div>
        <img
          src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
          alt=""
          className="Forecast-icon"
        />
        <div className="Forecast-temperatures">
          <div className="Forecast-temperature">
            <strong>33°</strong>
          </div>
          <div className="Forecast-temperature">28°</div>
        </div>
      </div>
      <div className="Forecast-day">
        <div className="Forecast-date">Tue</div>
        <img
          src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
          alt=""
          className="Forecast-icon"
        />
        <div className="Forecast-temperatures">
          <div className="Forecast-temperature">
            <strong>29°</strong>
          </div>
          <div className="Forecast-temperature">27°</div>
        </div>
      </div>
      <div className="Forecast-day">
        <div className="Forecast-date">Wed</div>
        <img
          src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
          alt=""
          className="Forecast-icon"
        />
        <div className="Forecast-temperatures">
          <div className="Forecast-temperature">
            <strong>23°</strong>
          </div>
          <div className="Forecast-temperature">10°</div>
        </div>
      </div>
      <div className="Forecast-day">
        <div className="Forecast-date">Thu</div>
        <img
          src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
          alt=""
          className="Forecast-icon"
        />
        <div className="Forecast-temperatures">
          <div className="Forecast-temperature">
            <strong>30°</strong>
          </div>
          <div className="Forecast-temperature">15°</div>
        </div>
      </div>
    </div>
  );
}
