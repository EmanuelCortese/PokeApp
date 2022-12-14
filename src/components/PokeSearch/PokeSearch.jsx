import React, { useContext, useEffect } from 'react'
import PokeCard from '../PokeCard/PokeCard'

import { PokemonList } from '../../components/PokeList/style'
import { PokeContext } from '../../context/PokeContext'

const PokeSearch = () => {
  const {
    state: { matches },
    dispatch,
  } = useContext(PokeContext)
  useEffect(() => dispatch({ type: 'reset_pokemons' }), [])

  return (
    <PokemonList>
      {matches?.map(({ id, name, PokemonTypes, PokemonUrlImage }, index) => (
        <PokeCard key={index} name={name} id={id} type={PokemonTypes} image={PokemonUrlImage} />
      ))}
    </PokemonList>
  )
}

export default React.memo(PokeSearch)
