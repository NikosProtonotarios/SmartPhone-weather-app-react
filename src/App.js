import React, {useState} from 'react';
import './App.css';
import Camera from './components/camera';
import Input from './components/input';
import Time from './components/time';
import WeatherDisplay from './components/weatherDisplay';
import Footer from './components/footer';
import Wind from './components/wind';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState("");

  const fetchWeatherData = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3e07281f0da89b74c5e9f127de9272d6`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(jsonData => {
              const temperatureC = Math.floor(jsonData.main.temp - 273);
              setWeatherData({ ...jsonData, temperature: temperatureC });
                setCityName(city.charAt(0).toUpperCase() + city.slice(1).toLowerCase());
                setError("");
            })
            .catch(error => {
                console.error(error);
                setWeatherData(null);
                setError("Write a valid city");
            });
  };

  return (
    <div className='MainContainer'>
      <div className="App">
          <Camera />
          <Time />
          <WeatherDisplay weatherData={weatherData} cityName={cityName} error={error} />
          <Input onCitySubmit={fetchWeatherData} />
          <Wind weatherData={weatherData}/>
          <Footer />
      </div>
    </div>
  );
}

export default App;