import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
    city:"Nashik",
    feelsLike: 26.57,
    temp: 26.57,
    tempMin: 26.57,
    tempMax: 26.57,
    humidity: 24,
    weather: "clear sky",
    });
return(
<div style={{textAlign:"center"}}>
    <h2>Weather App by Vaishnavi</h2>
       <SearchBox setWeatherInfo={setWeatherInfo} />
      <InfoBox info={weatherInfo}/>
</div>
);
}