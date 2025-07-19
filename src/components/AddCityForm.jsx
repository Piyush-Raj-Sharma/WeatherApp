import { useState } from "react";
import { useCityContext } from "../context/CityContext";
import LabelDropdown from "./LabelDropDown"
import Loader from "./Loader";

const AddCityForm = () => {
  const { addCity, error } = useCityContext();
  const [cityName, setCityName] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cityName || !selectedLabel) return;
    await addCity(cityName, selectedLabel);
    setCityName("");
    setSelectedLabel("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 items-center bg-gray-800 p-4 rounded-lg shadow-md"
    >
      <input
        type="text"
        placeholder="Enter city name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        className="px-4 py-2 rounded-md text-black"
      />
      <LabelDropdown selectedLabel={selectedLabel} setSelectedLabel={setSelectedLabel} />
      <button
        type="submit"
        disabled={<Loader/>}
        className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700"
      >
        {loading ? "Adding..." : "Add City"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};

export default AddCityForm;
