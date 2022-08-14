import './App.css'
import './localization/i18n'

import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { GlobalModalWrapper } from './component/organism'
import { ROUTES } from './constants/AppRoutes'
import Login from './pages/login'
import { CustomRoutes } from './routes/CustomRoute'
import { GlobalThemeContextProvider } from './themes/ThemeContext'
import { GlobalModal } from './utils'

let globalModalRef: any = null

function App() {
  useEffect(() => {
    GlobalModal.setUpModal(globalModalRef)
  }, [])
  return (
    <BrowserRouter>
      <GlobalThemeContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          {CustomRoutes({ routes: ROUTES })}
        </Routes>
        <GlobalModalWrapper ref={(el) => (globalModalRef = el)} />
      </GlobalThemeContextProvider>
    </BrowserRouter>
  )
}
export default App
