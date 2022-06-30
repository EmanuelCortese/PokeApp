import React, { useState } from 'react'

const Context = React.createContext({})

const INITAL_PAGE = 0
export const PokeProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [page, setPage] = useState(INITAL_PAGE)
  return (
    <Context.Provider value={{ data, setData, loading, setLoading, error, setError, page, setPage }}>
      {children}
    </Context.Provider>
  )
}

export default Context
