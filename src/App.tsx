import { useState } from 'react'
import { Logo } from './constants/app-images'
import './App.css'
import { Button } from './component/atom'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  return (
    <div className="App">
      <div>
        <Logo />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setLoading(true)} progress type="primary">
          Button
        </Button>
      </div>
      <p className="bg-green-600">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
