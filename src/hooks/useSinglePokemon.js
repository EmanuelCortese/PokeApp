import { useContext, useEffect } from 'react'
import { SinglePokeContext } from '../context/SinglePokeContext'
import getSinglePokemon from '../services/getSinglePokemon'

export const useSinglePokemon = ({ id }) => {
  const { dispatch } = useContext(SinglePokeContext)

  useEffect(() => {
    dispatch({ type: 'update_loading', payload: true })
    dispatch({ type: 'catch_error', payload: false })
    getSinglePokemon({ id })
      .then((data) => {
        dispatch({ type: 'update_loading', payload: false })
        dispatch({ type: 'update_data', payload: [data] })
        dispatch({ type: 'catch_error', payload: false })
      })
      .catch((err) => {
        console.error(err)
        err && dispatch({ type: 'catch_error', payload: true })
      })
  }, [id])
}
