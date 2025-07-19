import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CityProvider } from './context/CityContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <CityProvider>
            <App />
        </CityProvider>
    </BrowserRouter>
)
