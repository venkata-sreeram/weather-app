// api.openweathermap.org/data/2.5/weather?q=Sirsa&appid=983980943e4afc86d97243b4f1873779

import React, { useState, useEffect } from "react";
import { Weathercard } from "./weathercard";

const App = () => {
  const [searchValue, setsearchValue] = useState("Sirsa");
  const [tempinfo, settempinfo] = useState({});
  const getWeatherinfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=983980943e4afc86d97243b4f1873779`;
      const res = await fetch(url);
      const data = await res.json();

      // geting values --- from api to our project

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      // ----- creating my own object below for passing above values which i got from api----

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      // -------------------------------i have passed the object here
      settempinfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherinfo();
  }, []);

  return (
    <>
      <div className="main-div">
        <div className="appname"><h1><i class="uil uil-snowflake"></i> Weather App <i class="uil uil-snowflake"></i> </h1></div>
        <br />
        {/* search bar  */}
        <div className="searchbar">
          <input
            type="search"
            placeholder="search here"
            autoFocus
            id="Searchbararea"
            value={searchValue}
            onChange={(e) => setsearchValue(e.target.value)}
          />
          <button className="searchbtn" onClick={getWeatherinfo}>
            Search
          </button>
        </div>

      {/* weather card  */}

      <Weathercard tempinfo={tempinfo} />

      {/* passing tempinfo as a props in above statement  */}

      {/* ------  footer here  --------  */}
      <footer>
        <p>Designed & Developed by <a href="https://www.linkedin.com/in/gauravson97/" target="_blank">Gaurav Soni</a> </p>
      </footer>
      </div>
      {/* ------  footer here  --------  */}


    </>
  );
};

export default App;
