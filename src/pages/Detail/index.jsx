import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import getSinglePokemon from '../../services/getSinglePokemon'
import { PokeDetail } from '../../components/PokeDetail/PokeDetail'

export default function Detail () {
  const { id } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    getSinglePokemon({ id }).then(data => setData([data]))
  }, [id, setData])
  return (
    <>
      {data.map(({ id, name, height, weight, PokemonTypes, PokemonUrlImage, PokemonSpecies, PokemonStats }) => {
        return (
          <div key={id}>
            <PokeDetail
              id={id}
              name={name}
              height={height}
              weight={weight}
              types={PokemonTypes}
              image={PokemonUrlImage}
              specie={PokemonSpecies}
              stats={PokemonStats}
            />
          </div>
        )
      })}

    </>
  )
}
