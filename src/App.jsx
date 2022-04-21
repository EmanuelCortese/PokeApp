import { Routes, Route } from 'react-router-dom'
import { DETAIL, HOME } from './routes'

import Home from './pages/Home'
import Detail from './pages/Detail'

import './App.css'
import { GlobalStyles } from './styles/GlobalStyles'

import logo from './assets/Logo.png'

function App () {
  return (
    <div className='App'>
      <GlobalStyles />
      <img src={logo} className='AppLogo' />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={DETAIL} element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
