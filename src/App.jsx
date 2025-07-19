import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import { CityProvider } from "./context/CityContext";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <CityProvider>
        <div className="min-h-screen w-full bg-slate-100 text-slate-900 px-4 py-4 overflow-x-hidden">
          <Navbar/>
          <MainRoutes />
        </div>
      </CityProvider>
    </BrowserRouter>
  );
};

export default App;
