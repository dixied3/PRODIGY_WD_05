import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp () {
    const [weatherInfo , setWeatherInfo ] = useState({
        city : "Delhi" , 
        feelsLike: 25.99,
        humidity: 89,
        temp: 25.99,
        tempMax: 25.99,
        tempMin: 25.99,
        weather: "haze"
    }) ; 

    let updateInput = (result) => {
        setWeatherInfo(result) ; 
    }
    return (
        <div style={{textAlign : "center"}}>
            <h2>Weather App</h2><sup>DD</sup>
            <SearchBox updateInfo={updateInput}/>
            <InfoBox info={weatherInfo}/>
        </div>
    ) ; 
}