import React, { useState } from "react";
import axios from "axios";


const Weather = () => {
  const [temperature, setTemperature] = useState("");
  const [city, setCity] = useState("mumbai");
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");
  const [humidity, setHumidity] = useState("");
  const [visibility, setVisibility] = useState("");
  const [windspeed, setWineSpeed] = useState("");
  // const [wicon, setWicon] = useState("");
  const getWeatherData = () => {
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e203317f0df5474c05874e35b030eda3`,
    })
      .then((response) => {
        setTemperature(Math.round(response.data.main.temp - 273.15));
        setDesc(response.data.weather[0].description);
        setName(response.data.name);
        setHumidity(response.data.main.humidity);
        setVisibility(response.data.visibility / 1000);
        setWineSpeed(response.data.wind.speed);
        // setWicon(response.data.weather[0].icon);
        console.log(response);
      })
      .catch((error) => {});
  };

  return (
    <div
      onLoad={() => {
        getWeatherData(city);
      }}
      className="background absolute pr-4 bottom-0 right-0 mb-4"
    >
      <div className=" bg-gray-800 rounded-md p-4 w-[21rem] mt-5">
        <div id="card" className="weather flex">
          <div className="details">
          <div className="inline-flex">
                <form id="content" autoComplete="off">
                  <input
                    type="text"
                    name="input"
                    placeholder="City/town"
                    className="Search-box px-1 py-1 bg-gray-700 w-24 text-sm"
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <span></span>
                </form>
                <button
                  className="searchbtn bg-gray-700 leading-0 px-1"
                  onClick={() => {
                    getWeatherData(city);
                  }}
                >
                  <i class="ri-search-line text-[10px]"></i>
                </button>
              </div>
            <div className="temp inline-flex">
              {temperature}
              <span>&deg;</span>
            {/* <img className="weatherimg w-28" alt="image1" src={`50d.svg`} /> */}
            </div>
            <div className="right text-[20px]">
              <div style={{ fontWeight: "bold", marginTop: "4px" }}>{name}</div>
              <div
                id="summary"
                style={{ fontWeight: "bold", marginTop: "4px" }}
              >
                {desc}
              </div>
              
            </div>
          </div>
          <div className="infos text-[16px]">
            <div className="inline-flex text-center">
            <div>
              <img
                alt="humidity1"
                className="humidityimg w-12"
                style={{ width: "5", height: "5" }}
                src="humidity.svg"
              ></img>
            </div>
            <div className="humidity">Humidity {humidity}%</div>
            </div>
            <div className="inline-flex text-center">
              <div>
                <img
                  alt="visibility1"
                  className="visibilityimg w-12"
                  style={{ width: "5", height: "5" }}
                  src="visibility.svg"
                ></img>
              </div>
            <div className="visibility">Visibility {visibility} km</div>
            </div>
            <div className="inline-flex text-center">
              <div>
                <img
                  alt="windspeed1"
                  className="windimg w-12"
                  style={{ width: "5", height: "5" }}
                  src="wind.svg"
                ></img>
              </div>
              <div className="windspeed">Wind Speed {windspeed} km</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
