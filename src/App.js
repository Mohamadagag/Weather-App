import sunny from "./assets/vibrant-sunrise-yellow-500x500.jpg";
import rainy from "./assets/rainy-day.jpg";
import clouds from "./assets/cloudy.jpg";
import "./App.css";
import Description from "./components/Description/Description";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("paris");
  const [bg, setBg] = useState(sunny);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4e9e362ee85541f4014d75b961f010b4&units=metric`
      );
      try {
        setWeather(res.data);
        console.log(res.data);

        if (res.data.weather[0].main === "Clouds") {
          setBg(clouds);
        } else if (res.data.weather[0].main === "Rainy") {
          setBg(rainy);
        } else {
          setBg(sunny);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchWeatherData();
  }, [city]);

  const keyPressed = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section__inputs">
              <input
                onChange={keyPressed}
                type="text"
                name="city"
                placeholder="Enter City..."
              />
            </div>
            <div className="section section__temprature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.sys.country}`}</h3>
                <img
                  src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                  alt="weather-icon"
                />
                <h3>{weather.weather[0].description}</h3>
              </div>
              <div className="temprature">
                <h1>{`${weather.main.temp}`} &#8451;</h1>
              </div>
            </div>
            <Description
              min={weather.main.temp_min}
              max={weather.main.temp_max}
              feelsLike={weather.main.feels_like}
              pressure={weather.main.pressure}
              humidity={weather.main.humidity}
              windSpeed={weather.wind.speed}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
