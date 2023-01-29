import { Box } from "@mui/system";
import WeatherInfo from "./WeatherInfo";

const ForecastWeather = ({ dailyData }) => {
    return(
        <Box sx={{ display: "flex", gap: { xs: "16px", md: "64px" }, flexDirection: { xs: "column", md: "row" } }}>
            {dailyData.map(day => {
                return (
                    <WeatherInfo
                        key={crypto.randomUUID()}
                        date={day.date}
                        temperature={day.temperature}
                        weathercode={day.weathercode}
                    />
                );
            })}
        </Box>
    );
};

export default ForecastWeather;