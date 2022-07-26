import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ROUTES } from './config/AppRoutes'
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
