import { useState, useEffect } from 'react'
import { BASE_URL } from '../config'
import './App.css'

function getTypes (types) {
  return types?.map(el => el.type.name)
}

function getUrlImage (obj) {
  return obj?.other?.dream_world?.front_default
}

function App () {
  const [data, setData] = useState([])

  useEffect(() => {
    ;(async () => {
      // obtener url de cada pokemon
      const res = await window.fetch(`${BASE_URL}/pokemon?limit=10&offset=0`)
      const { results } = await res.json()

      // crear array de promesas con las urls obtenidas
      const promises = results.map(({ url }) => window.fetch(url).then(res => res.json()))
      // Promise.allSettled resuelve el array de promesas
      const resPromiseAll = await Promise.allSettled(promises)

      // extraer datos necesarios para mostrar
      const dataToShow = resPromiseAll.map(res => res.value)

      setData(dataToShow)
    })()
  }, [BASE_URL])

  return (
    <div className='App'>
      <h1>PokeApp</h1>
      {
        data.map(({ id, name, types, sprites }) => {
          const typesList = getTypes(types)
          const urlImage = getUrlImage(sprites)

          return (
            <div key={id}>
              <h2>{name}</h2>
              <img loading='lazy' src={urlImage} alt={name} />
              <div>
                {
                  typesList?.map(type => <span key={type}>{type}</span>)
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
