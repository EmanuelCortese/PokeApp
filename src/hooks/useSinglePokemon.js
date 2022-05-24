import { useEffect, useState } from 'react'
import getSinglePokemon from '../services/getSinglePokemon'

export const useSinglePokemon = ({ id }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getSinglePokemon({ id }).then(data => {
      setIsLoading(false)
      setData([data])
    })
  }, [id, setData])

  return { data, isLoading }
}
