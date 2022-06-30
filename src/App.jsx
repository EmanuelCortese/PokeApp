import { Routes, Route } from 'react-router-dom'
import { DETAIL, HOME } from './routes'

import Home from './pages/Home'
import Detail from './pages/Detail'

import './App.css'
import { GlobalStyles } from './styles/GlobalStyles'

import ErrorPage from './pages/Error404'
import { PokeProvider } from './context/PokeContext'

function App () {
  return (
    <div className='App'>
      <GlobalStyles />
      <PokeProvider>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={DETAIL} element={<Detail />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </PokeProvider>
    </div>
  )
}

export default App
