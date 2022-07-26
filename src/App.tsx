import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import { ROUTES } from './routes'

function App() {
  console.log('hello world')
  console.log('hello world')
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
