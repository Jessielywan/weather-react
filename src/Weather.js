import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: "Thursday 14:55",
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
          <div className="container">
            <div className="search-form">
              <form>
                <div className="row">
                  <div className="col-9">
                    <input type="search" placeholder="Enter a city.." className="form-control search-input" autocomplete="off" />
                  </div>
                  <div className="col-3 p-0">
                    <input type="submit" className="btn btn-primary w-100" value="Search" />
                  </div>
                </div>
              </form>
            </div>
            <div className="WeatherInfo">
              <div className="row">
                <div className="col-6">
                  <h1>{weatherData.city}</h1>
                  <h2>{weatherData.date}</h2>
                  <ul>
                    <li className="text-capitalize">{weatherData.description}</li>
                    <li>
                      Humidity: <strong>{weatherData.humidity}%</strong>, 
                      Wind: <strong>{weatherData.wind} km/h</strong>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md col-sm-8">
                  <div className="temperature-container d-flex justify-content-end">
                      <img id="icon" src={weatherData.iconUrl} width="80" height="80" alt={weatherData.description}></img>
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°C</span>
                  </div> 
                </div>
              </div>
            </div>
            <div className="weather-forecast">
              <div className="row">
                <div className="col-2">
                  <div className="weather-forecast-date">Thu</div>
                  <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" alt="" width="90"></img>
                  <div className="weather-forecast-temperatures">
                    <span className="weather-forecast-temperature-max">20°</span>
                    <span className="weather-forecast-temperature-min">12°</span>
                  </div>
                </div>
                <div className="col-2">
                  <div className="weather-forecast-date">Fri</div>
                  <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png" alt="" width="90"></img>
                  <div className="weather-forecast-temperatures">
                    <span className="weather-forecast-temperature-max">15°</span>
                    <span className="weather-forecast-temperature-min">9°</span>
                  </div>
                </div>
                <div className="col-2">
                  <div className="weather-forecast-date">Sat</div>
                  <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" alt="" width="90"></img>
                  <div className="weather-forecast-temperatures">
                    <span className="weather-forecast-temperature-max">23°</span>
                    <span className="weather-forecast-temperature-min">14°</span>
                  </div>
                </div>
                <div className="col-2">
                  <div className="weather-forecast-date">Sun</div>
                  <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" alt="" width="90"></img>
                  <div className="weather-forecast-temperatures">
                    <span className="weather-forecast-temperature-max">22°</span>
                    <span className="weather-forecast-temperature-min">16°</span>
                  </div>
                </div>
                <div className="col-2">
                  <div className="weather-forecast-date">Mon</div>
                  <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" alt="" width="90"></img>
                  <div className="weather-forecast-temperatures">
                    <span className="weather-forecast-temperature-max">17°</span>
                    <span className="weather-forecast-temperature-min">10°</span>
                  </div>
                </div>
                <div className="col-2">
                  <div className="weather-forecast-date">Mon</div>
                  <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" alt="" width="90"></img>
                  <div className="weather-forecast-temperatures">
                    <span className="weather-forecast-temperature-max">17°</span>
                    <span className="weather-forecast-temperature-min">10°</span>
                  </div>
                </div>
              </div>
            </div>
            <footer>
              <a href="https://github.com/Jessielywan/weather-react" target="_blank" rel="noopener noreferrer">Open-source Code</a> by Jessie Wan
            </footer>
          </div>
      </div>
  );
  } else {
    const apiKey = "o3d77t41a2a0ce9d42f448b54f6283dd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }




  
    
}