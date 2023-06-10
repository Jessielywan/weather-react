import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
      setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
      console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
    <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index ) {
            if (index < 5) {
            return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            };
            })}
            
        </div>
    </div>
    );
    }else {        
        let apiKey = "o3d77t41a2a0ce9d42f448b54f6283dd";
        let latitude = props.coordinates.latitude;
        let longitude = props.coordinates.longitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`

        axios.get(apiUrl).then(handleResponse);
    }
}