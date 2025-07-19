import React, { useState } from 'react';

const AddMainCity = ({ setMainCity, searched, setSearched, fetchAndSetWeather }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() === "") return;
    setMainCity(input);
    localStorage.setItem("mainCity", JSON.stringify(input));
    fetchAndSetWeather(input);
    setSearched(true);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-10 p-4">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter city name"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </div>
      {!searched && (
        <p className="text-center text-gray-500 mt-4 text-sm">No city searched yet...</p>
      )}
    </div>
  );
};

export default AddMainCity;
