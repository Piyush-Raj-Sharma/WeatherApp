import { useState } from "react";
import { useCityContext } from "../context/CityContext";
import LabelDropdown from "./LabelDropDown";
import Loader from "./Loader";

const AddCityForm = () => {
  const { addCity, error } = useCityContext();
  const [cityName, setCityName] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cityName.trim() || !selectedLabel) return;

    try {
      setLoading(true);
      await addCity(cityName.trim(), selectedLabel);
      setCityName("");
      setSelectedLabel("");
    } catch (err) {
      console.error("Add City Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-end bg-white p-4 rounded-lg shadow-md w-full max-w-3xl mx-auto"
    >
      {/* Input */}
      <div className="flex flex-col w-full sm:flex-1">
        <label className="text-sm font-medium text-gray-700 mb-1">
          City Name
        </label>
        <input
          type="text"
          placeholder="Enter city name"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />
      </div>

      {/* Dropdown */}
      <div className="flex flex-col w-full sm:w-56">
        <LabelDropdown
          selectedLabel={selectedLabel}
          setSelectedLabel={setSelectedLabel}
        />
      </div>

      {/* Submit Button */}
      <div className="flex flex-col w-full sm:w-auto">
        <button
          type="submit"
          disabled={loading}
          className="mt-5 sm:mt-0 bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700 w-full sm:w-auto"
        >
          {loading ? <Loader size="sm" color="#fff" /> : "Add City"}
        </button>
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-500 text-sm mt-2 sm:mt-0 w-full">{error}</p>
      )}
    </form>
  );
};

export default AddCityForm;
