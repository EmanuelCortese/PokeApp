import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PokeProvider } from './context/PokeContext'
import Context from './context/ThemeContext'
import { DETAIL, HOME } from './routes'

import Detail from './pages/Detail'
import ErrorPage from './pages/Error404'
import Home from './pages/Home'

import './App.css'
import { SinglePokeProvider } from './context/SinglePokeContext'

function App() {
  const { userTheme } = useContext(Context)
  return (
    <div className='App' id={userTheme}>
      <PokeProvider>
        <SinglePokeProvider>
          <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={DETAIL} element={<Detail />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </SinglePokeProvider>
      </PokeProvider>
    </div>
  )
}

export default App
