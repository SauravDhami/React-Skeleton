import './App.css'
import './localization/i18n'

import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Button, Input } from './component/atom'
import CircularLoader from './component/atom/loading/circularLoader'
import { GlobalModalWrapper } from './component/organism'
import { ROUTES } from './constants/AppRoutes'
import Home from './pages/home'
import Login from './pages/login'
import { CustomRoutes } from './routes/CustomRoute'
import { GlobalThemeContextProvider } from './themes/ThemeContext'
import { AsyncConfirmationModal, GlobalModal } from './utils'

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
