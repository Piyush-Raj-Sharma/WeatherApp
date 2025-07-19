import React from 'react';
import AddCityForm from '../components/AddCityForm';
import { useCityContext } from '../context/CityContext';
import CityCard from '../components/CityCard';

const Cities = () => {
  const { cities, removeCity } = useCityContext();

  return (
    <div className="px-4 py-6 max-w-5xl mx-auto">
      <AddCityForm />

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Saved Cities</h2>

        {cities.length === 0 ? (
          <p className="text-gray-500 text-sm">No city searched yet...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cities.map((city) => (
              <CityCard
                key={city.id}
                city={city}
                onDelete={removeCity}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cities;
