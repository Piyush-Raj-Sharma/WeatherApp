import AddCityForm from "../components/AddCityForm";
import { useCityContext } from "../context/CityContext";
import CityCard from "../components/CityCard";
import { MapPin } from "lucide-react";

const Cities = () => {
  const { cities, removeCity } = useCityContext();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 px-4 py-12 overflow-x-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
            Manage Your Favorite Cities
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Add, organize, and track weather for the places you care about most.
          </p>
        </div>

        <div className="bg-white/70 backdrop-blur-lg border border-blue-200 rounded-2xl shadow-md px-4 py-8 sm:px-6 md:px-10 lg:px-12 transition-all duration-300">
          <div className="flex flex-col items-center justify-center text-center mb-8">
            <div className="flex items-center gap-2 text-blue-700 font-semibold text-xl md:text-2xl">
              <MapPin size={24} />
              <h2>Add a New City</h2>
            </div>
            <p className="mt-2 text-sm text-blue-500">
              Save your favorite locations for quick weather access
            </p>
          </div>

          <AddCityForm />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Your Saved Cities
          </h2>

          {cities.length === 0 ? (
            <div className="text-center text-gray-500 py-10 animate-pulse">
              You haven’t added any cities yet... try adding one above ✨
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <CityCard key={city.id} city={city} onDelete={removeCity} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cities;
