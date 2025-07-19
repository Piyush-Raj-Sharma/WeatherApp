import { createContext, useContext, useState } from "react";
import { loadFromLocal, saveToLocal } from "../utils/localStorage";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [cities, setCities] = useState(() => loadFromLocal("cities") || []);

  const addCity = (cityObj) => {
    setCities((prev) => {
      if (prev.some((city) => city.name === cityObj.name)) return prev;
      const updated = [...prev, cityObj];
      saveToLocal("cities", updated);
      return updated;
    });
  };

  const removeCity = (id) => {
    const updated = cities.filter((city) => city.id !== id);
    setCities(updated);
    saveToLocal("cities", updated);
  };

  const clearCities = () => {
    setCities([]);
    saveToLocal("cities", []);
  };

  return (
    <CityContext.Provider value={{ cities, addCity, removeCity, clearCities }}>
      {children}
    </CityContext.Provider>
  );
};

export const useCityContext = () => useContext(CityContext);
