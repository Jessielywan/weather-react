import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      icon: response.data.condition.icon
    });
  }

  function search() {
    const apiKey = "o3d77t41a2a0ce9d42f448b54f6283dd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
  }


  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
          <div className="container">
            <div className="search-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-9">
                    <input 
                      type="search" 
                      placeholder="Enter a city.."
                      className="form-control search-input" 
                      autoComplete="off"
                      onChange={handleCityChange} 
                    />
                  </div>
                  <div className="col-3 p-0">
                    <input type="submit" className="btn btn-primary w-100" value="Search" />
                  </div>
                </div>
              </form>
              <WeatherInfo data={weatherData} />
              <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
            <footer>
              <a href="https://github.com/Jessielywan/weather-react" target="_blank" rel="noopener noreferrer">Open-source Code</a> by Jessie Wan
            </footer>
          </div>
      </div>
  );
  } else {
    search();
    return "Loading...";
  }


}