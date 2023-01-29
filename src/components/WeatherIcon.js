// Weather Icons
import SunSolidIcon from "../assets/sun-solid.svg";
import PartlyCloudyIcon from "../assets/cloud-sun-solid.svg";
import FogIcon from "../assets/smog-solid.svg";
import DrizzleIcon from "../assets/cloud-rain-solid.svg";
import RainIcon from "../assets/cloud-showers-heavy-solid.svg";
import SnowflakeIcon from "../assets/snowflake-solid.svg";
import ThunderstormIcon from "../assets/cloud-bolt-solid.svg";
import UnknownIcon from "../assets/question-solid.svg";

const WeatherIcon = ({ weathercode }) => {
    const getWeatherIcon = code => {
        switch (code) {
        case 0:
            return SunSolidIcon;
        case 1: case 2: case 3:
            return PartlyCloudyIcon;
        case 45: case 48:
            return FogIcon;
        case 51: case 53: case 55: case 56: case 57:
            return DrizzleIcon;
        case 61: case 63: case 66: case 67: case 80: case 81: case 82:
            return RainIcon;
        case 71: case 73: case 75: case 77: case 85: case 86:
            return SnowflakeIcon;
        case 95: case 96: case 99:
            return ThunderstormIcon;
        default:
            return UnknownIcon;
        }
    };

    return <img className="weather-icon" src={getWeatherIcon(weathercode)}/>;
};

export default WeatherIcon;