import { PokeProvider } from './context/PokeContext'
import Context from './context/ThemeContext'
import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { DETAIL, HOME } from './routes'

import Home from './pages/Home'
import Detail from './pages/Detail'
import ErrorPage from './pages/Error404'

import './App.css'

function App () {
  const { userTheme } = useContext(Context)
  return (
    <div className='App' id={userTheme}>
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
