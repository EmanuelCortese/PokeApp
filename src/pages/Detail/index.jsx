import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PokeDetail } from '../../components/PokeDetail/PokeDetail'
import { PokeFooter } from '../../components/PokeFooter/PokeFooter'
import PokeHeader from '../../components/PokeHeader/PokeHeader'
import { Spinner } from '../../components/Spinner/Spinner'
import { SinglePokeContext } from '../../context/SinglePokeContext'
import { useSinglePokemon } from '../../hooks/useSinglePokemon'
import ErrorPage from '../../pages/Error404'

export default function Detail() {
  const {
    state: { data, isLoading, error },
  } = useContext(SinglePokeContext)
  const { id } = useParams()
  useSinglePokemon({ id })

  if (error) return <ErrorPage message='Sorry! But there was an error loading the Pokemon detail.' />

  return (
    <>
      <PokeHeader margin visible={false} get={false} />
      <>
        {isLoading ? (
          <Spinner />
        ) : (
          data.map(({ id, name, height, weight, PokemonTypes, PokemonUrlImage, PokemonSpecies, PokemonStats }) => {
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
          })
        )}
      </>

      <PokeFooter />
    </>
  )
}
