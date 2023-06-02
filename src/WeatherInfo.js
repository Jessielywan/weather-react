import React from "react";
import CurrentDate from "./CurrentDate";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
    <div className="row">
      <div className="col-6">
        <h1>{props.data.city}</h1>
        <CurrentDate date={props.data.date} />
        <ul>
          <li className="text-capitalize">{props.data.description}</li>
          <li>
            Humidity: <strong>{props.data.humidity}%</strong>, 
            Wind: <strong>{props.data.wind} km/h</strong>
          </li>
        </ul>
      </div>
      <div className="col-lg-6 col-md col-sm-8">
        <div className="temperature-container d-flex justify-content-end">
            <img id="icon" src={props.data.iconUrl} width="80" height="80" alt={props.data.description}></img>
          <span className="temperature">{Math.round(props.data.temperature)}</span>
          <span className="unit">°C</span>
        </div> 
      </div>
    </div>
  </div>
  )
}