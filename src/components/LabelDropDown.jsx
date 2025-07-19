
const labels = ["Home", "Work", "Travel", "Other"];

const LabelDropdown = ({ selectedLabel, setSelectedLabel }) => {
  return (
    <select
      className="border rounded-md p-2 bg-white text-black"
      value={selectedLabel}
      onChange={(e) => setSelectedLabel(e.target.value)}
    >
      <option value="">Select Label</option>
      {labels.map((label) => (
        <option key={label} value={label}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default LabelDropdown;

