import Context from '../context/PokeContext'
import { useEffect, useContext } from 'react'
import getPokemons from '../services/getPokemons'

export const usePokemons = ({ once = true } = {}) => {
  const { data, setData, loading, setLoading, error, setError, page, setPage } = useContext(Context)

  useEffect(() => {
    setLoading(true)
    once
      ? getPokemons({ page })
          .then(data => {
            setError(false)
            setLoading(false)
            setData((prevData) => prevData.concat(data))
          }).catch((err) => {
            console.log(err)
            setError(true)
          })
      : !once && setLoading(false)
  }, [setData, page])

  return { data, loading, setPage, error }
}
