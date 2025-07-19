import { Link, useLocation } from "react-router-dom";
import { MapPin, Sun } from "lucide-react";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className=" mx-auto px-6 py-3 bg-white  shadow-md  transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <Link
          to="/"
          className="text-2xl font-bold text-blue-700 tracking-tight flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Sun size={24} className="text-yellow-400" />
          Weather Viewer
        </Link>

        <Link
          to="/cities"
          className={`inline-flex items-center gap-2 px-5 py-2 rounded-full font-medium border ${
            pathname === "/cities"
              ? "bg-blue-100 text-blue-700 border-blue-300"
              : "bg-white text-blue-600 border-blue-200"
          } hover:bg-blue-50 hover:shadow-md active:scale-95 transition-all duration-300`}
        >
          <MapPin size={18} />
          My Cities
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
