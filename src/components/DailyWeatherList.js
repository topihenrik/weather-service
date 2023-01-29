import { Box } from "@mui/system";
import DailyWeatherCard from "./DailyWeatherCard";

const DailyWeatherList = ({ dailyData }) => {
    return(
        <Box sx={{ display: "flex", gap: { xs: "16px", sm: "32px" }, flexDirection: { xs: "column", sm: "row" } }}>
            {dailyData.map(day => {
                return (
                    <DailyWeatherCard
                        key={crypto.randomUUID()}
                        date={day.date}
                        max_temperature={day.max_temperature}
                        min_temperature={day.min_temperature}
                        weathercode={day.weathercode}
                    />
                );
            })}
        </Box>
    );
};

export default DailyWeatherList;