import { PokeCard } from '../PokeCard/PokeCard'
import { usePokemons } from '../../hooks/usePokemons'
import { PokemonList, PokemonListButton } from './style'

export default function PokeList () {
  const { data, handleNextPage } = usePokemons()

  return (
    <>
      <PokemonList>
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
      </PokemonList>

      <PokemonListButton onClick={handleNextPage}>Load more</PokemonListButton>
    </>
  )
}
