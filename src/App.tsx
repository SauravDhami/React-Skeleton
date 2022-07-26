import './App.css'
import './localization/i18n'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ROUTES } from './constants/AppRoutes'
import Home from './pages/home'
import { CustomRoutes } from './routes/CustomRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {CustomRoutes({ routes: ROUTES })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
