import React, { useState, useEffect } from 'react'

export const Weathercard = ({tempinfo}) => {
const [weatherState,setweatherState]= useState("");


    const{
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,

    }=tempinfo;


    // showing weather icon live 

    useEffect(() => {
        if (weathermood) {
            switch(weathermood){
                case "Clouds" :setweatherState("uil-clouds");
                    break;
                case "Rain" :setweatherState("uil-cloud-drizzle");
                    break;
                case "Clear" :setweatherState(" uil-sun");
                    break;
                case "Sunny" :setweatherState(" uil-brightness");
                    break;
                case "Mostly Sunny" :setweatherState("uil-cloud-sun-rain");
                    break;
                case "Tornado" :setweatherState(" uil-tornado");
                    break;
                case "Heavy Rain" :setweatherState(" uil-cloud-showers-heavy");
                    break;
                case "Cloud Winds" :setweatherState(" uil-cloud-wind");
                    break;
                case "Snow Flake" :setweatherState("uil-snowflake");
                    break;
                case "Thunderstorm" :setweatherState("uil-thunderstorm");
                    break;
                case "Haze" :setweatherState("uil-wind");
                    break;
                case "Mist" :setweatherState("uil-windy");
                    break;
                    default:
                        setweatherState(" uil-sun")
                        break;
            }
            
        }
    }, [weathermood])


    // converting sunset mini sec to hour or min 
    let sec = sunset;
    let date = new Date (sec*1000);
    let timestr =`${date.getHours()}:${date.getMinutes()}`

    return (
        <>
            <div className="weather-card">
                {/* left  */}
                <div className="card-left">
                    <div className="live-temp-type">{weathermood}</div>
                    <div className="live-weather-icon">
                    <i class={`uil ${weatherState}`}></i>
                    </div>
                    
                    <div className="live-temp-deg">{temp}&deg;C</div>
                </div>

                {/* right */}
                <div className="card-right">
                    {/* right top */}
                    <div className="card-right-top">
                        <div className="weatherplace"> {name},{country} </div>
                    </div>

                    {/* right mid */}
                    <div className="card-mid-top">
                        <div className="sub-weather-info">
                            <i class="uil uil-sunset"></i>
                            <div className="sub-items-text">
                                <p>{timestr} PM</p>
                                <p>Sunset</p>
                            </div>
                        </div>
                        <div className="sub-weather-info">
                            <i class="uil uil-cloud-rain"></i>
                            <div className="sub-items-text">
                                <p>{humidity}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="sub-weather-info">
                        <i class="uil uil-wind-sun"></i>
                         <div className="sub-items-text">
                                <p>{pressure}</p>
                                <p>Pressure</p>
                            </div>
                        </div>
                        <div className="sub-weather-info">
                            <i class="uil uil-wind"></i>
                            <div className="sub-items-text">
                                <p>{speed}Km/hr</p>
                                <p>Speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
