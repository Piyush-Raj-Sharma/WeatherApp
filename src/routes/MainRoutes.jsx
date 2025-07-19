import { Route, Routes } from 'react-router-dom'
import Dashboard from './../pages/Dashboard';
import CityWeather from './../pages/CityWeather';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='city/:id' element={<CityWeather/>}/>
    </Routes>
  )
}

export default MainRoutes