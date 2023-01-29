import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Box } from "@mui/system";
import { Button, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

import meteoService from "../services/meteoService";
import citiesData from "../data/cities.json";
import parseUtil from "../utils/parseUtil";
import CurrentWeatherCard from "./CurrentWeatherCard";
import DailyWeatherList from "./DailyWeatherList";

const CityPage = () => {
    const [parsedWeatherData, setParsedWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [timeframe, setTimeframe] = useState("current");
    const city_name = useParams().name;
    const city = citiesData.find(city => city.name === city_name);

    const handleTimeframeChange = (event) => {
        setTimeframe(event.target.value);
    };

    const getWeatherData = async () => {
        try {
            const data = await meteoService.getWeather({ coordinates: city.coordinates });
            const parsedData = parseUtil.weatherData(data);
            setParsedWeatherData(parsedData);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getWeatherData();
    }, []);

    if (loading) return null;

    return(
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "32px", margin: "32px", paddingBottom: "30%", boxSizing: "border-box" }}>
            <Typography variant="h5" sx={{ textTransform: "capitalize", margin: { xs: "32px 0", sm: "64px 0" } }}>{city_name}</Typography>
            {timeframe === "current"
                ? <CurrentWeatherCard
                    time={parsedWeatherData.current_weather.time}
                    temperature={parsedWeatherData.current_weather.temperature}
                    weathercode={parsedWeatherData.current_weather.weathercode}/>
                : <DailyWeatherList
                    dailyData={parsedWeatherData.daily_weather}/>
            }
            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
                <ToggleButtonGroup
                    color="primary"
                    value={timeframe}
                    exclusive
                    onChange={handleTimeframeChange}
                >
                    <ToggleButton value="current">Current</ToggleButton>
                    <ToggleButton value="daily">Daily</ToggleButton>
                </ToggleButtonGroup>
                <Button variant="outlined" component={Link} to="/">
                    Back
                </Button>
            </Box>
        </Box>
    );
};

export default CityPage;