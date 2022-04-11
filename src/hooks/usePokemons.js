import { useState, useEffect } from 'react'
import getPokemons from '../services/getPokemons'

export const usePokemons = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getPokemons().then(data => {
      setLoading(false)
      setData(data)
    })
  }, [setData])

  return { data, loading }
}
