import { useState, useEffect } from 'react'
import getPokemons from '../services/getPokemons'

const INITAL_PAGE = 0

export const usePokemons = ({ once = true } = {}) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITAL_PAGE)

  useEffect(() => {
    setLoading(true)
    once
      ? getPokemons({ page }).then(data => {
          setLoading(false)
          setData((prevData) => prevData.concat(data))
        })
      : !once && setLoading(false)
  }, [setData, page])

  return { data, loading, setPage }
}
