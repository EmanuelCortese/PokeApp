import React, { useReducer } from 'react'

export const PokeContext = React.createContext({})

const reducer = (state, action) => {
  if (action.type === 'update_pokemons') {
    return {
      ...state,
      data: [...state.data, ...action.payload],
    }
  }
  if (action.type === 'reset_pokemons') {
    return {
      ...state,
      data: [],
    }
  }
  if (action.type === 'update_match') {
    return {
      ...state,
      matches: action.payload,
    }
  }
  if (action.type === 'update_all_pokemons') {
    return {
      ...state,
      alldata: action.payload,
    }
  }
  if (action.type === 'update_keyword') {
    return {
      ...state,
      keyword: action.payload,
    }
  }
}

export const PokeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    alldata: [],
    keyword: '',
    matches: [],
  })

  return <PokeContext.Provider value={{ state, dispatch }}>{children}</PokeContext.Provider>
}
