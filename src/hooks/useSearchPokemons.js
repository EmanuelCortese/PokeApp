import { useCallback, useContext, useEffect } from 'react'
import { PokeContext } from '../context/PokeContext'
import getPokemons from '../services/getPokemons'

export const useSearchPokemons = ({ get = true } = {}) => {
  const {
    state: { alldata, keyword },
    dispatch,
  } = useContext(PokeContext)

  const handleKeyword = useCallback(
    (e) => {
      window.localStorage.setItem('keyword', e.target.value.toLowerCase())
      dispatch({
        type: 'update_keyword',
        payload: e.target.value.toLowerCase(),
      })
    },
    [keyword]
  )

  useEffect(() => {
    get &&
      alldata.length <= 0 &&
      getPokemons({
        limit: 100000,
      })
        .then((data) =>
          data?.map(({ name, id, PokemonTypes, PokemonUrlImage }) => {
            return { name, id, PokemonTypes, PokemonUrlImage }
          })
        )
        .then((name) => dispatch({ type: 'update_all_pokemons', payload: name }))
        .catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    const nameSearch = alldata?.map(({ name, id, PokemonTypes, PokemonUrlImage }) => {
      return { name, id, PokemonTypes, PokemonUrlImage }
    })
    keyword.length > 0 &&
      dispatch({
        type: 'update_match',
        payload: nameSearch?.filter(
          ({ name } = {}) => name !== undefined && name.toString().toLowerCase().match(keyword)
        ),
      })
  }, [keyword])

  return { handleKeyword }
}
