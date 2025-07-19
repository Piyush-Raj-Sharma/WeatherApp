import { Route, Routes } from 'react-router-dom'
import Dashboard from './../pages/Dashboard';
import PageNotFound from './../pages/PageNotFound';
import Cities from '../pages/Cities';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/cities' element={<Cities/>}/>
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  )
}

export default MainRoutes