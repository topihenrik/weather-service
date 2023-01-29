import axios from "axios";
const baseUrl = "https://api.open-meteo.com/v1";

const getWeather = async ({ coordinates }) => {
    const urlParams = new URLSearchParams(
        {
            timezone: "auto",
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            current_weather: true,
            // daily variables inserted separately
        }
    );

    // URLSearchParams has issues with json arrays so daily variables must be inserted like this
    ["temperature_2m_max","temperature_2m_min","weathercode"].map(dailyVar => {
        urlParams.append("daily", dailyVar);
    });

    const request = await axios.get(`${baseUrl}/forecast?${urlParams}`);

    return request.data;
};

export default { getWeather };