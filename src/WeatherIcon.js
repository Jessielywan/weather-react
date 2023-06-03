import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
    const codeMapping = {
        "clear-sky-day": "CLEAR_DAY",
        "clear-sky-night": "CLEAR_NIGHT",
        "few-clouds-day": "PARTLY_CLOUDY-DAY",
        "few-clouds-night": "PARTLY-CLOUDY-NIGHT",
        "scattered-clouds-day": "CLOUDY",
        "scattered-clouds-night": "CLOUDY",
        "broken-clouds-day": "CLOUDY",
        "broken-clouds-night": "CLOUDY",
        "shower-rain-day": "RAIN",
        "shower-rain-night": "RAIN",
        "thunderstorm-day": "RAIN",
        "thunderstorm-night": "RAIN",
        "snow-day": "SNOW",
        "snow-night": "SNOW",
        "mist-day": "FOG",
        "mist-night": "NIGHT"
    }
 
   return (
    <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="#C45985"
        size={80}
        animate={true}
    />
   )
    
}