import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/WbSunny";
import SevereColdIcon from "@mui/icons-material/AcUnit";

import "./InfoBox.css";

export default function InfoBox({ info }) {

  const HOT_URL =
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAINY_URL =
    "https://images.unsplash.com/photo-1501696461415-6bd6660c6742";

  const imageUrl =
    info.humidity > 80
      ? RAINY_URL
      : info.temp > 15
      ? HOT_URL
      : COLD_URL;

  const weatherIcon =
    info.humidity > 80 ? (
      <ThunderstormIcon />
    ) : info.temp > 15 ? (
      <SunnyIcon />
    ) : (
      <SevereColdIcon />
    );

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>

          <CardMedia sx={{ height: 140 }} image={imageUrl} />

          <CardContent>
            <Typography variant="h5" gutterBottom>
              {weatherIcon} {info.city}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Weather: {info.weather} <br />
              Temperature: {info.temp}°C <br />
              Feels Like: {info.feelsLike}°C <br />
              Min Temp: {info.tempMin}°C <br />
              Max Temp: {info.tempMax}°C <br />
              <WaterDropIcon fontSize="small" /> Humidity: {info.humidity}%
            </Typography>
          </CardContent>

        </Card>
      </div>
    </div>
  );
}
