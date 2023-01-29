import { DateTime } from "luxon";

const weatherData = (data) => {
    const FORECAST_DAYS = 3;
    const result = {};
    const daily_weather = [];
    for (let i=0;i<FORECAST_DAYS;i++) {
        const newDay = {
            date: DateTime.fromISO(data.daily.time[i]).toFormat("d.L."),
            max_temperature: Math.round(data.daily.temperature_2m_max[i]),
            min_temperature: Math.round(data.daily.temperature_2m_min[i]),
            weathercode: data.daily.weathercode[i]
        };
        daily_weather.push(newDay);
    }
    const current_weather = {
        time: DateTime.fromISO(data.current_weather.time).toFormat("HH.mm"),
        temperature: Math.round(data.current_weather.temperature),
        weathercode: data.current_weather.weathercode,
    };

    result.daily_weather = daily_weather;
    result.current_weather = current_weather;
    return result;
};

export default { weatherData };