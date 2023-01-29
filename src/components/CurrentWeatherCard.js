import { Card, CardContent, Typography } from "@mui/material";
import WeatherIcon from "./WeatherIcon";
import WeatherName from "./WeatherName";

const CurrentWeatherCard = ({ time, temperature, weathercode }) => (
    <Card variant="elevation">
        <CardContent sx={{ display: "flex", flexDirection: "column", justifyConten: "center", alignItems: "center", gap: "4px" }}>
            <Typography sx={{ fontWeight: 700 }}>{time}</Typography>
            <WeatherIcon weathercode={weathercode}/>
            <Typography sx={{ fontWeight: 700, fontSize: "2rem" }}>{temperature} °C</Typography>
            <WeatherName weathercode={weathercode}/>
        </CardContent>
    </Card>
);

export default CurrentWeatherCard;