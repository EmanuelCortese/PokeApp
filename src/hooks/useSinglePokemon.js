import { useEffect, useState } from 'react'
import getSinglePokemon from '../services/getSinglePokemon'

export const useSinglePokemon = ({ id }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    getSinglePokemon({ id }).then(data => {
      setIsLoading(false)
      setData([data])
    }).catch((err) => {
      console.log(err)
      err && setError(true)
    })
  }, [id, setData])

  return { data, isLoading, error }
}
