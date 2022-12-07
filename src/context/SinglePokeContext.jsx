import React, { useReducer } from 'react'

export const SinglePokeContext = React.createContext([])

const reducer = (state, action) => {
  if (action.type === 'update_data') {
    return {
      ...state,
      data: action.payload,
    }
  }
  if (action.type === 'update_loading') {
    return {
      ...state,
      isLoading: action.payload,
    }
  }
  if (action.type === 'catch_error') {
    return {
      ...state,
      error: action.payload,
    }
  }
}

export const SinglePokeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    isLoading: false,
    error: null,
  })

  return <SinglePokeContext.Provider value={{ state, dispatch }}>{children}</SinglePokeContext.Provider>
}
