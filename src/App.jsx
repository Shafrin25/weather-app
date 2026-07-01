import React, { useState, useEffect } from "react";
import "./App.css"; // Ensure your CSS file is imported
import search from "./assets/image/search.png";
import clear from "./assets/image/clear.png";
import clouds from "./assets/image/clouds.png";
import rain from "./assets/image/rain.png";
import drizzle from "./assets/image/drizzle.png";
import mist from "./assets/image/mist.png";
import humidity from "./assets/image/humidity.png";
import wind from "./assets/image/wind.png";


export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  const apiKey = "8b13e62138e0aa1c1db7e99f14c544d6";
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const checkWeather = async (cityName) => {
    if (!cityName) return; 

    try {
      const response = await fetch(`${apiURL}${cityName}&appid=${apiKey}`);

      if (response.status === 404) {
        setError(true);
        setWeatherData(null);
      } else {
        const data = await response.json();
        setWeatherData(data);
        setError(false);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(true);
    }
  };

  const getWeatherIcon = (mainWeather) => {
  switch (mainWeather) {
    case "Clouds":
      return clouds;

    case "Clear":
      return clear;

    case "Rain":
      return rain;

    case "Drizzle":
      return drizzle;

    case "Mist":
      return mist;

    default:
      return clear;
  }
};
  useEffect(() => {
    checkWeather("New York");
  }, []);

  const handleSearch = () => {
    if (city.trim() !== "") {
      checkWeather(city);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="card">
      {/* Search Section */}
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          spellCheck="false"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>
          <img src={search} alt="search" />
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="error" style={{ display: "block" }}>
          <p>Invalid city name</p>
        </div>
      )}
      {weatherData && (
        <div className="weather" style={{ display: "block" }}>
          <img
            src={getWeatherIcon(weatherData.weather[0].main)}
            className="weather-icon"
            alt="weather condition"
          />
          <h1 className="temp">{Math.round(weatherData.main.temp)}℃</h1>
          <h2 className="city">{weatherData.name}</h2>
          
          <div className="details">
            <div className="col">
              <img src={humidity} alt="humidity" />
              <div>
                <p className="humidity">{weatherData.main.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img src={wind} alt="wind" />
              <div>
                <p className="wind">{weatherData.wind.speed} Km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}