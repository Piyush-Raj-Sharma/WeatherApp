import { Route, Routes } from 'react-router-dom'
import Dashboard from './../pages/Dashboard';
import CityWeather from './../pages/CityWeather';
import PageNotFound from './../pages/PageNotFound';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='city/:id' element={<CityWeather/>}/>
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  )
}

export default MainRoutes