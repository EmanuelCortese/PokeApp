import { useParams } from 'react-router-dom'
import { useSinglePokemon } from '../../hooks/useSinglePokemon'
import { PokeDetail } from '../../components/PokeDetail/PokeDetail'
import { Spinner } from '../../components/Spinner/Spinner'
import ErrorPage from '../Error404'
import { PokeHeader } from '../../components/PokeHeader/PokeHeader'

export default function Detail () {
  const { id } = useParams()
  const { data, isLoading, error } = useSinglePokemon({ id })

  if (error) return <ErrorPage message='Sorry! But there was an error loading the Pokemon detail.' />

  if (isLoading) return <Spinner />

  return (
    <>
      <PokeHeader title='Detail' />
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

    </>
  )
}
