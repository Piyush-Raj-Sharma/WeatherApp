import React from "react";
import { Building2, MapPin, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CityCard = ({ city, onDelete }) => {
  const navigate = useNavigate();

  const showWeatherDetails = () => {
    localStorage.setItem("mainCity", city.name); // no need to remove before setting
    navigate("/"); // go to dashboard
  };

  const handleDelete = (e) => {
    e.stopPropagation(); // prevent card click from firing
    onDelete(city.id); // trigger delete
  };

  return (
    <div
      onClick={showWeatherDetails}
      className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-all cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <MapPin className="text-blue-500" />
        <div>
          <p className="text-lg font-semibold text-gray-800">{city.name}</p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <Building2 className="w-4 h-4" /> {city.label}
          </p>
        </div>
      </div>
      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700"
        title="Delete"
      >
        <Trash2 />
      </button>
    </div>
  );
};

export default CityCard;
