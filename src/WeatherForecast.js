import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
    return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>
                    <WeatherIcon code="clear-sky-day" size={36}/>
                    <div className="Weatherforecast-temperatures">
                        <span className="WeatherForecast-temperature-max">30°</span> 
                        <span className="WeatherForecast-temperature-min">19°</span>
                        </div>
                </div>
            </div>
        </div>
    )
}