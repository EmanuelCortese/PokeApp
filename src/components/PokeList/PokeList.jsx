import { PokeCard } from '../PokeCard/PokeCard'
import { usePokemons } from '../../hooks/usePokemons'
import { PokemonList } from './style'

export default function PokeList () {
  const { data } = usePokemons()
  return (
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
  )
}
