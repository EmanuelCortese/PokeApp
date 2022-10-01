import { useTheme } from '../hooks/useTheme'
import { createContext } from 'react'

const Context = createContext({})

export const ThemeProvider = ({ children }) => {
  const { userTheme, changeTheme } = useTheme()

  return (
    <Context.Provider value={{ userTheme, changeTheme }}>
      {children}
    </Context.Provider>
  )
}

export default Context
