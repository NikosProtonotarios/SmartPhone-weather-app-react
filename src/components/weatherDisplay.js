import React from "react";
import SunnyIcon from "../images/sun.svg";
import SnowIcon from "../images/snow.svg";
import CloudIcon from "../images/clouds.svg";
import StormIcon from "../images/storm.svg";
import RainIcon from "../images/rain.svg";

function WeatherDisplay({weatherData, cityName, error}) {
    let weatherIcon = SunnyIcon;

    if (weatherData) {
        const description = weatherData.weather[0].description.toLowerCase();

        if (description.includes("clear")) {
            weatherIcon = SunnyIcon;
        } else if (description.includes("rain")) {
            weatherIcon = RainIcon;
        } else if (description.includes("clouds")) {
            weatherIcon = CloudIcon;
        } else if (description.includes("storm")) {
            weatherIcon = StormIcon;
        } else if (description.includes("rain")) {
            weatherIcon = RainIcon;
        } else if (description.includes("snow")) {
            weatherIcon = SnowIcon;
        }
    }

    // const displayIcon = weatherData ? weatherIcon : CatIcon;

    // const temperatureC = Math.floor(jsonData.main.temp -273);
    // const temperatureF = Math.floor((temperatureC * 9/5) + 32);
    // const location = data.name;
    // const humidity = data.main.humidity;
    // const wind = data.wind.speed;
    // const description = data.weather[0].description;

    return (
        <div>
        <div className="weatherContainer">
            <img style={{ height: '90px' }} src={weatherIcon} alt="Sunny Weather Icon" />
            <p style={{ color: 'white', lineHeight: '0px', fontSize: '50px' }}>
                {weatherData ? `${weatherData.temperature}°C` : ""}
            </p>
        </div>
        <div>
            <p style={{ color: 'white', margin: '10px', fontSize: '30px', textAlign: 'center' }}>
                {error ? (
                    <i style={{ color: 'red', margin: '3px', fontSize: '20px' }} className="fa-solid fa-circle-exclamation"></i>
                ) : (
                    <i style={{ fontSize: '25px' }} className="fa-solid fa-location-dot"></i>
                )}
                {error ? error : cityName || "Hello!"}
            </p>
        </div>
    </div>
);
}

export default WeatherDisplay;