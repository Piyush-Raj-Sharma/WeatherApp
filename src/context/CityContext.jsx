import { createContext, useContext, useState } from "react";
import { loadFromLocal, saveToLocal } from "../utils/localStorage";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [cities, setCities] = useState(() => loadFromLocal("cities") || []);

  const addCity = (name, label) => {
    setCities((prev) => {
      if (prev.some((city) => city.name.toLowerCase() === name.toLowerCase()))
        return prev;

      const newCity = {
        id: Date.now(), 
        name,
        label,
      };

      const updated = [...prev, newCity];
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
