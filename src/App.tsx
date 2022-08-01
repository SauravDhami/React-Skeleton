import './App.css'
import './localization/i18n'

import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Button } from './component/atom'
import { GlobalModalWrapper } from './component/organism'
import { ROUTES } from './constants/AppRoutes'
import Home from './pages/home'
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
          <Route path="/" element={<Home />} />
          {CustomRoutes({ routes: ROUTES })}
        </Routes>
        <TestModal />
        <GlobalModalWrapper ref={(el) => (globalModalRef = el)} />
      </GlobalThemeContextProvider>
    </BrowserRouter>
  )
}

const TestModal = () => {
  const openModal = () => {
    GlobalModal.open({
      title: 'This is Modal',
      component: Content,
      props: {
        hello: 'hello',
      },
      onClose: () => {},
    })
  }

  return (
    <div className="font-sans">
      <Button onClick={openModal}>Open Modal</Button>
    </div>
  )
}

const Content = () => (
  <div>
    You have been selected for a chance to get one year of subscription to use Wikipedia for free!
  </div>
)
export default App
