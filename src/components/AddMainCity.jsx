import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";

const AddMainCity = ({ setMainCity, searched, setSearched, fetchAndSetWeather }) => {
  const [input, setInput] = useState("");
  const [hasMain, setHasMain] = useState(false);

  useEffect(() => {
    const storedMain = localStorage.getItem("mainCity");
    if (storedMain) setHasMain(true);
  }, []);

  const handleSearch = () => {
    if (input.trim() === "") return;
    setMainCity(input);
    localStorage.setItem("mainCity", JSON.stringify(input));
    fetchAndSetWeather(input);
    setSearched(true);
    setHasMain(true);
    setInput(""); // clear input after search
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-16 px-4 sm:px-0">
      <div
        className={`flex items-center gap-2 p-3 rounded-xl transition-all duration-300 shadow-sm border ${
          hasMain
            ? "border-blue-400 bg-blue-50 backdrop-blur-sm"
            : "border-gray-200 bg-white"
        }`}
      >
        <input
          type="text"
          placeholder="Enter a city name (e.g., Delhi)"
          className={`w-full px-4 py-2 rounded-md text-sm outline-none bg-transparent placeholder:text-gray-400 ${
            hasMain ? "text-blue-800" : "text-gray-800"
          }`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="inline-flex items-center gap-1 px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 active:scale-95 transition"
        >
          <Search size={18} />
          Search
        </button>
      </div>

      {!hasMain ? (
        <p className="text-center text-blue-400 mt-5 text-sm italic animate-pulse">
          No city searched yet. Start by typing above.
        </p>
      ) : (
        <p className="text-center text-green-600 mt-4 text-sm font-medium">
          Showing weather for your selected city.
        </p>
      )}
    </div>
  );
};

export default AddMainCity;
