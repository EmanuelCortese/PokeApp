import { useState, useEffect } from 'react'
import getPokemons from './services/getPokemons'
import './App.css'

function App () {
  const [data, setData] = useState([])

  useEffect(() => {
    getPokemons().then(data => { setData(data) })
  }, [])

  return (
    <div className='App'>
      <h1>PokeApp</h1>
      {
        data?.map(({ id, name, PokemonTypes, PokemonUrlImage }) => {
          return (
            <div key={id}>
              <h2>{name}</h2>
              <img loading='lazy' src={PokemonUrlImage} alt={name} />
              <div>
                {
                  PokemonTypes?.map(type => <span key={type}>{type}</span>)
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
