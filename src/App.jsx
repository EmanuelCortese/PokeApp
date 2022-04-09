import { useState, useEffect } from 'react'
import getPokemons from './services/getPokemons'
import './App.css'
import { PokeCard } from './components/PokeCard/PokeCard'
import { GlobalStyles } from './styles/GlobalStyles'

function App () {
  const [data, setData] = useState([])

  useEffect(() => {
    getPokemons().then(data => { setData(data) })
  }, [])

  return (
    <div className='App'>
      <GlobalStyles />
      <h1>PokeApp</h1>
      <div className='AppContainer'>
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
      </div>
    </div>
  )
}

export default App
