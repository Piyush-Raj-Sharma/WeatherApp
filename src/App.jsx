import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import { CityProvider } from "./context/CityContext";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <CityProvider>
        <div className="min-h-screen w-screen bg-slate-100 text-slate-900 p-4">
          <Navbar/>
          <MainRoutes />
        </div>
      </CityProvider>
    </BrowserRouter>
  );
};

export default App;
