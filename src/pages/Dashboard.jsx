import { useState, useEffect } from "react";
import AddMainCity from "../components/AddMainCity";
import { fetchWeatherByCity } from "../api/weatherAPI";
import getWeatherIcons from "../utils/getWeatherIcons";
import {
  Droplets,
  Gauge,
  Wind,
  Eye,
  CloudSun,
  Sunrise,
  Sunset,
  LoaderCircle,
} from "lucide-react";

const Dashboard = () => {
  const [mainCity, setMainCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAndSetWeather = async (cityName) => {
    if (!cityName) return;
    setLoading(true);

    try {
      const data = await fetchWeatherByCity(cityName);
      setWeatherData(data);
    } catch (error) {
      console.error("Weather fetch failed:", error);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedCity = localStorage.getItem("mainCity");
    if (storedCity) {
      const city = storedCity.replace(/"/g, "");
      setMainCity(city);
    }
  }, []);

  useEffect(() => {
    if (mainCity) fetchAndSetWeather(mainCity);
  }, [mainCity]);

  const formatTime = (unix) =>
    new Date(unix * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="min-h-screen px-4 py-6 bg-gradient-to-br from-blue-100 via-white to-blue-50 text-gray-900">
      <AddMainCity
        mainCity={mainCity}
        setMainCity={setMainCity}
        fetchAndSetWeather={fetchAndSetWeather}
      />

      {loading ? (
        <div className="flex justify-center items-center mt-20 text-blue-500">
          <LoaderCircle className="animate-spin w-10 h-10" />
        </div>
      ) : weatherData ? (() => {
        const isNight = weatherData.weather[0].icon.includes("n");

        return (
          <div
            className={`mt-10 max-w-3xl mx-auto p-6 rounded-2xl shadow-xl border transition-all ${
              isNight
                ? "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white border-blue-900"
                : "bg-gradient-to-br from-[#cce7ff] via-[#e8f4ff] to-white border-blue-200"
            }`}
          >
            <h2
              className={`text-3xl font-bold text-center mb-6 ${
                isNight ? "text-white" : "text-blue-900"
              }`}
            >
              {weatherData.name}, {weatherData.sys.country}
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left: Icon & Temp */}
              <div className="flex flex-col items-center text-center gap-2">
                <div className={`animate-pulse ${isNight ? "text-white" : "text-blue-800"}`}>
                  {getWeatherIcons(weatherData.weather[0].main, isNight)}
                </div>
                <h3 className="text-xl font-semibold capitalize">{weatherData.weather[0].main}</h3>
                <p className="text-sm capitalize text-gray-400">
                  ({weatherData.weather[0].description})
                </p>
                <p className="text-4xl font-bold mt-2">{weatherData.main.temp}°C</p>
                <p className="text-sm text-gray-400">
                  Feels like {weatherData.main.feels_like}°C
                </p>
              </div>

              {/* Right: Weather Stats */}
              <div className="grid grid-cols-2 gap-4 text-sm w-full md:w-1/2 mt-4 md:mt-0">
                <WeatherStat icon={<Droplets size={18} />} label={`Humidity: ${weatherData.main.humidity}%`} />
                <WeatherStat icon={<Gauge size={18} />} label={`Pressure: ${weatherData.main.pressure} hPa`} />
                <WeatherStat icon={<Wind size={18} />} label={`Wind: ${weatherData.wind.speed} m/s`} />
                <WeatherStat icon={<Eye size={18} />} label={`Visibility: ${weatherData.visibility / 1000} km`} />
                <WeatherStat icon={<CloudSun size={18} />} label={`Clouds: ${weatherData.clouds.all}%`} />
                <WeatherStat icon={<Sunrise size={18} />} label={`Sunrise: ${formatTime(weatherData.sys.sunrise)}`} />
                <WeatherStat icon={<Sunset size={18} />} label={`Sunset: ${formatTime(weatherData.sys.sunset)}`} />
              </div>
            </div>
          </div>
        );
      })() : (
        <p className="mt-10 text-center text-gray-600">Select a city to view its weather.</p>
      )}
    </div>
  );
};

const WeatherStat = ({ icon, label }) => (
  <div className="flex items-center gap-2">
    <span className="text-base">{icon}</span>
    <span>{label}</span>
  </div>
);

export default Dashboard;
