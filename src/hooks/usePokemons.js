import { useState, useEffect } from 'react'
import getPokemons from '../services/getPokemons'

const INITAL_PAGE = 0

export const usePokemons = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITAL_PAGE)

  const handleNextPage = () => {
    setPage(page => page + 1)
  }

  useEffect(() => {
    setLoading(true)
    getPokemons({ page }).then(data => {
      setLoading(false)
      setData((prevData) => prevData.concat(data))
    })
  }, [setData, page])

  return { data, loading, handleNextPage }
}
