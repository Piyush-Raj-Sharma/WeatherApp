import {
  Sun,
  Moon,
  Cloud,
  CloudSun,
  CloudMoon,
  CloudRain,
  CloudSnow,
  Zap,
} from "lucide-react";

const getWeatherIcons = (condition, isNight) => {
  switch (condition.toLowerCase()) {
    case "clear":
      return isNight ? <Moon size={64} /> : <Sun size={64} />;
    case "clouds":
      return isNight ? <CloudMoon size={64} /> : <CloudSun size={64} />;
    case "rain":
    case "drizzle":
      return <CloudRain size={64} />;
    case "thunderstorm":
      return <Zap size={64} />;
    case "snow":
      return <CloudSnow size={64} />;
    default:
      return <Cloud size={64} />;
  }
};

export default getWeatherIcons;
