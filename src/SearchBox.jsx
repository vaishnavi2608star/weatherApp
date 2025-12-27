// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import "./SearchBox.css";
// import { useState } from "react";



// export default function SearchBox() {
//     const [city, setCity] = useState("");

//     const API_URL="https://api.openweathermap.org/data/2.5/weather";
//     const API_KEY="b0142c52e7cbdcfcdbf659c317782ae7";
//     let getWeatherInfo= async()=>{
//        let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//       let jsonResponse= await response.json();
//       console.log(jsonResponse);
//         let result={
//              temp:jsonResponse.main.temp,
//              tempMin : jsonResponse.main.temp_min,
//              tempMax : jsonResponse.main.temp_max,
//              humidity:jsonResponse.main.humidity,
//              feelsLike:jsonResponse.main.feelslike,
//              weather:jsonResponse.weather[0].description,
//         };
//         console.log(result);
//     };
  
//   const handleChange = (evt) => {
//     setCity(evt.target.value);
//   };

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     console.log(city);
//     setCity("");
//     getWeatherInfo();
//   };

//   return (
//     <div className="SearchBox">
//       <h3>Search for the weather</h3>

//       <form onSubmit={handleSubmit}>
//         <TextField
//           id="city"
//           label="City Name"
//           variant="outlined"
//           value={city}
//           onChange={handleChange}
//           required
//         />

//         <br /><br />

//         <Button variant="contained" type="submit">
//           Search
//         </Button>
//       </form>
//     </div>
//   );
// }


import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ setWeatherInfo }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; 

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        alert("City not found");
        return;
      }

      const result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like, // ✅ FIXED
        weather: jsonResponse.weather[0].description,
      };

      // 🔥 SEND DATA TO PARENT
      setWeatherInfo(result);
      setCity("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getWeatherInfo();
  };

  return (
    <div className="SearchBox">
      <h3>Search for the weather</h3>

      <form onSubmit={handleSubmit}>
        <TextField
          label="City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <br /><br />

        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
