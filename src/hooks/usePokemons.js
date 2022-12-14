import { useContext, useEffect, useState } from 'react'
import { PokeContext } from '../context/PokeContext'
import getPokemons from '../services/getPokemons'

const INITAL_PAGE = 0

export const usePokemons = ({ once = true } = {}) => {
  const { dispatch } = useContext(PokeContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(INITAL_PAGE)

  const nextPage = () => setPage((page) => page + 1)

  useEffect(() => {
    setLoading(true)
    once
      ? getPokemons({ page })
          .then((data) => {
            setLoading(false)
            setError(false)
            dispatch({ type: 'update_pokemons', payload: data })
          })
          .catch((err) => {
            console.error(err)
            setError(true)
          })
      : !once && setLoading(false)
  }, [page])

  return { loading, error, nextPage }
}
