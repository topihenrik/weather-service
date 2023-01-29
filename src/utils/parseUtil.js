import { DateTime } from "luxon";

const FORECAST_DAYS = 3;

const weatherData = (data) => {
    const result = {};
    const daily_weather = [];
    for (let i=0;i<FORECAST_DAYS;i++) {
        const newDay = {
            date: DateTime.fromISO(data.daily.time[i]).toFormat("d.L."),
            temperature: Math.round((data.daily.temperature_2m_max[i] + data.daily.temperature_2m_min[i]) / 2),
            weathercode: data.daily.weathercode[i]
        };
        daily_weather.push(newDay);
    }
    const current_weather = {
        date: DateTime.fromISO(data.current_weather.time).toFormat("d.L."),
        temperature: Math.round(data.current_weather.temperature),
        weathercode: data.current_weather.weathercode,
    };

    result.daily_weather = daily_weather;
    result.current_weather = current_weather;
    return result;
};

export default { weatherData };