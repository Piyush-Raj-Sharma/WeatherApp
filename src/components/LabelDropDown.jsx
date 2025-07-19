import React from "react";
import { Home, Briefcase, MapPin, Plane, Landmark } from "lucide-react";

const predefinedLabels = [
  { icon: Home, label: "Home", value: "home" },
  { icon: Briefcase, label: "Work", value: "work" },
  { icon: MapPin, label: "Local", value: "local" },
  { icon: Plane, label: "Travel", value: "travel" },
  { icon: Landmark, label: "others", value: "others" },
];

const LabelDropDown = ({ selectedLabel, setSelectedLabel }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium text-gray-800">Label</label>
      <select
        value={selectedLabel}
        onChange={(e) => setSelectedLabel(e.target.value)}
        className="w-full px-3 py-2 rounded-md bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select a label</option>
        {predefinedLabels.map(({ icon: Icon, label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      {/* {selectedLabel && (
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
          {predefinedLabels.find((item) => item.value === selectedLabel)
            ?.icon &&
            React.createElement(
              predefinedLabels.find((item) => item.value === selectedLabel)
                .icon,
              { size: 18 }
            )}
          <span>
            {
              predefinedLabels.find((item) => item.value === selectedLabel)
                ?.label
            }
          </span>
        </div>
      )} */}
    </div>
  );
};

export default LabelDropDown;
