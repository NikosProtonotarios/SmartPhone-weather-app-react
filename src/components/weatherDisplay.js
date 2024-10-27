import React, {useState, useEffect} from "react";
import SunnyIcon from "../images/2682848_day_forecast_sun_sunny_weather_icon.svg";

function WeatherDisplay({weatherData, cityName, error}) {

    // const temperatureC = Math.floor(data.main.temp -273);
    // const temperatureF = Math.floor((temperatureC * 9/5) + 32);
    // const location = data.name;
    // const humidity = data.main.humidity;
    // const wind = data.wind.speed;
    // const description = data.weather[0].description;

    return (
        <div>
            <div className="weatherContainer">
                <img style={{height: '90px'}} src={SunnyIcon} alt="Sunny Weather Icon"/>
                <p style={{color: 'white', lineHeight: '0px', fontSize: '50px' }}>12°C</p>
            </div>
            <div>
            <p style={{color: 'white', margin: '10px', fontSize: '30px', textAlign: 'center'}}>
                {error ? <i style={{color: 'red', margin: '3px', fontSize: '20px'}} 
                className="fa-solid fa-circle-exclamation"></i>  : <i style={{fontSize: '25px'}} className="fa-solid fa-location-dot"></i>} {error ? error : cityName || "Hello!"}
            </p>
            </div>
        </div>
    );
}

export default WeatherDisplay;