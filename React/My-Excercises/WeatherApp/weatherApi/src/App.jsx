import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHigh, faWind } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

async function fetchWeatherData(city, apiKey) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  const data = await response.json();

  console.log(data);
  return data;
}

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityInput, setCityInput] = useState("");
  const [error, setError] = useState("");

  const handleCityInputChange = (e) => {
    setCityInput(e.target.value);
  };

  const handleSearch = async () => {
    if (cityInput.length >= 3) {
      const apiKey = "22de3d04c61f8958eada69282f7c1b31"; // Replace with your OpenWeatherMap API key
      const data = await fetchWeatherData(cityInput, apiKey);

      if (data.cod === "404") {
        setError("City not found");
        setWeatherData(null);
      } else {
        setError("");
        setWeatherData(data);
      }
    }
  };

  return (
    <div className="Weather-App">
      <div className="Search-Bar">
        <input
          type="text"
          id="cityInput"
          value={cityInput}
          onChange={handleCityInputChange}
          placeholder="Enter city"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && (
        <div className="Error-Message">
          <p>City not found</p>
        </div>
      )}
      {weatherData && !error && (
        <div className="Weather-Info">
          <h1 className="Weather-Info__Title">Weather Data</h1>
          <div className="Weather-Info__Item">
            <span className="Weather-Info__Icon">
              <FontAwesomeIcon icon={faTemperatureHigh} />
            </span>
            <div>
              <span className="Weather-Info__Label">Temperature:</span>
              <span className="Weather-Info__Value">
                {weatherData.main.temp} K
              </span>
            </div>
          </div>
          <div className="Weather-Info__Item">
            <span className="Weather-Info__Icon">
              <FontAwesomeIcon icon={faWind} />
            </span>
            <div>
              <span className="Weather-Info__Label">Wind Speed:</span>
              <span className="Weather-Info__Value">
                {weatherData.wind.speed} m/s
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
