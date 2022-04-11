import { usePokemons } from './hooks/usePokemons'
import './App.css'
import { PokeCard } from './components/PokeCard/PokeCard'
import { GlobalStyles } from './styles/GlobalStyles'
import logo from './assets/Logo.png'
import { Spinner } from './components/Spinner/Spinner'

function App () {
  const { data, loading } = usePokemons()

  return (
    <div className='App'>
      <GlobalStyles />
      <img src={logo} className='AppLogo' />
      {
        loading
          ? <Spinner />
          : <div className='AppContainer'>
            {
                data?.map(({ id, name, PokemonTypes, PokemonUrlImage }) => {
                  return (
                    <div key={id}>
                      <PokeCard
                        name={name}
                        id={id}
                        type={PokemonTypes}
                        image={PokemonUrlImage}
                      />
                    </div>
                  )
                })
              }
            {/* eslint-disable-next-line */}
            </div>
      }
    </div>
  )
}

export default App
