import { usePokemons } from './hooks/usePokemons'
import './App.css'
import { GlobalStyles } from './styles/GlobalStyles'
import logo from './assets/Logo.png'
import { Spinner } from './components/Spinner/Spinner'
import PokeList from './components/PokeList/PokeList'

function App () {
  const { loading } = usePokemons()

  return (
    <div className='App'>
      <GlobalStyles />
      <img src={logo} className='AppLogo' />
      {
        loading
          ? <Spinner />
          : <PokeList />
      }
    </div>
  )
}

export default App
