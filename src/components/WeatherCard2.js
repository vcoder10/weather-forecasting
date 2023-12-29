import { useEffect, useState } from "react";
import "./gpt.css";
const WeatherCard = () => {
  const [searchValue, setSearchValue] = useState("kolkata");
  const [city, setCity] = useState("kolkata");
  const [weatherInfo, setWeatherInfo] = useState();

  // link of api
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=3ec1355b51c4a17fc8857213025fec94`;

  // to fetch data
  useEffect(() => {
    getWeatherinfo();
  }, [city]);

  const getWeatherinfo = async () => {
    const data = await fetch(url);

    const jsonData = await data.json();
    //console.log(jsonData);  you can conole log to check what data you are getting from api
    setWeatherInfo(jsonData);
  };
  // if weatherInfo is not available return dummy data
  if (!weatherInfo) return <h1>No data</h1>;

  // destructing required data from weatherInfo

  const { temp, pressure, humidity } = weatherInfo.main;
  const { country, sunset } = weatherInfo.sys;
  const { speed } = weatherInfo.wind;

  // to convert sunset time
  function convertUnixTimestampToTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes(); // Add leading zero if needed

    return `${hours}:${minutes.substr(-2)}`;
  }

  return (
    <div className="weather-container">
      <div className="search">
        <input
          className="search-box"
          placeholder="Enter city name..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button className="btn" onClick={() => setCity(searchValue)}>
          Search
        </button>
      </div>

      <div className="card">
        <h2 className="temp">
          Temp{"🌡"} {temp}{" "}
        </h2>
        <h3 className="city">
          {" "}
          {city}, {country}
        </h3>

        <div className="weather-details">
          <div className="details">
            <span>{pressure}</span>
            <span>Pressure</span>
          </div>
          <div className="details">
            <span>{humidity}</span>
            <span>Humidity</span>
          </div>

          <div className="details">
            <span>{speed}</span>
            <span>Wind{""}</span>
          </div>

          <div className="details">
            <span>{convertUnixTimestampToTime(sunset)}</span>
            <span>sunset{"🌞"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
