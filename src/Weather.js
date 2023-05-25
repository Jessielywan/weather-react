import React from "react";
import "./Weather.css";

export default function Weather() {
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
                    <h1>Amsterdam</h1>
                    <h2>Thursday 17:00</h2>
                    <ul>
                      <li>sunny</li>
                      <li>
                        Humidity: <strong>52%</strong>, 
                        Wind: <strong>23 km/h</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md col-sm-8">
                    <div className="temperature-container d-flex justify-content-end">
                        <img id="icon" src="https://openweathermap.org/img/wn/04d@2x.png" width="80" height="80" alt="broken clouds"></img>
                      <span className="temperature">20</span>
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
                </div>
              </div>
              <footer>
                <a href="https://github.com/Jessielywan/weather-react" target="_blank">Open-source Code</a> by Jessie Wan
              </footer>
            </div>
        </div>
    );
}