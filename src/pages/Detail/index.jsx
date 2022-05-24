import { useParams } from 'react-router-dom'
import { useSinglePokemon } from '../../hooks/useSinglePokemon'
import { PokeDetail } from '../../components/PokeDetail/PokeDetail'
import { Spinner } from '../../components/Spinner/Spinner'

export default function Detail () {
  const { id } = useParams()
  const { data, isLoading } = useSinglePokemon({ id })

  return (
    <> {
      isLoading
        ? <Spinner />
        : (
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

    </>
  )
}
