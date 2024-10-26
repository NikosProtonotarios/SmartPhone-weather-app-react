import React from "react";
import SunnyIcon from "../images/2682848_day_forecast_sun_sunny_weather_icon.svg";

function WeatherDisplay() {
    return (
        <div>
            <div className="weatherContainer">
                <img style={{height: '90px'}} src={SunnyIcon} alt="Sunny Weather Icon"/>
                <p style={{color: 'white', lineHeight: '0px', fontSize: '50px' }}>12°C</p>
            </div>
            <div>
                <p style={{color: 'white', margin: '10px', fontSize: '30px', textAlign: 'center'}}>
                    <i style={{fontSize: '25px'}} class="fa-solid fa-location-dot"></i> Swindon</p>
            </div>
        </div>
    );
}

export default WeatherDisplay