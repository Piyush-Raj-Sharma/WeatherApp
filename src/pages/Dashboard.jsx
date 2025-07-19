import { useState, useEffect } from "react";
import AddMainCity from "../components/AddMainCity";
import { fetchWeatherByCity } from "../api/weatherAPI";

const Dashboard = () => {
  const [mainCity, setMainCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchAndSetWeather = async (cityName) => {
    if (!cityName) return;

    try {
      const data = await fetchWeatherByCity(cityName);
      setWeatherData(data);
    } catch (error) {
      console.error("Weather fetch failed:", error);
      setWeatherData(null);
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
    if (mainCity) {
      fetchAndSetWeather(mainCity);
    }
  }, [mainCity]);

  const formatTime = (unix) => {
    return new Date(unix * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 text-gray-900">
      <AddMainCity
        mainCity={mainCity}
        setMainCity={setMainCity}
        fetchAndSetWeather={fetchAndSetWeather}
      />

      {weatherData ? (
        <div className="mt-10 max-w-2xl mx-auto p-6 rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold text-center mb-4">
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p><strong>Temperature:</strong> {weatherData.main.temp}°C</p>
            <p><strong>Feels Like:</strong> {weatherData.main.feels_like}°C</p>
            <p><strong>Condition:</strong> {weatherData.weather[0].main} ({weatherData.weather[0].description})</p>
            <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
            <p><strong>Pressure:</strong> {weatherData.main.pressure} hPa</p>
            <p><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
            <p><strong>Visibility:</strong> {weatherData.visibility / 1000} km</p>
            <p><strong>Clouds:</strong> {weatherData.clouds.all}%</p>
            <p><strong>Sunrise:</strong> {formatTime(weatherData.sys.sunrise)}</p>
            <p><strong>Sunset:</strong> {formatTime(weatherData.sys.sunset)}</p>
          </div>
          <div className="mt-4 text-center">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
              className="inline-block"
            />
          </div>
        </div>
      ) : (
        <p className="mt-10 text-center text-gray-600">
          Select a city to view its weather.
        </p>
      )}
    </div>
  );
};

export default Dashboard;
