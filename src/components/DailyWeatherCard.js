import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import WeatherIcon from "./WeatherIcon";
import WeatherName from "./WeatherName";

const DailyWeatherCard = ({ date, max_temperature, min_temperature, weathercode }) => (
    <Card variant="elevation">
        <CardContent sx={{ display: "flex", flexDirection: "column", justifyConten: "center", alignItems: "center", gap: "4px" }}>
            <Typography sx={{ fontWeight: 700 }}>{date}</Typography>
            <WeatherIcon weathercode={weathercode}/>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Typography sx={{ fontWeight: 700, fontSize: "2rem" }}>{max_temperature} °C</Typography>
                <Typography sx={{ fontWeight: 500, fontSize: "1.4rem" }}>{min_temperature} °C</Typography>
            </Box>
            <WeatherName weathercode={weathercode}/>
        </CardContent>
    </Card>
);

export default DailyWeatherCard;