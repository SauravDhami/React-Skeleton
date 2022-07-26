import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import { ROUTES } from './routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {ROUTES}
      </Routes>
    </BrowserRouter>
  )
}

export default App
