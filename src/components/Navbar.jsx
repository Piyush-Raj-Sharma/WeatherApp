import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        Weather Viewer
      </Link>
      <div className="space-x-4">
        <Link
          to="/cities"
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Add City
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
