import { createContext, useState } from 'react'

const Context = createContext({})

export const ThemeProvider = ({ children }) => {
  const mode = window.localStorage.getItem('themeMode')
  const currentMode = JSON.parse(mode) ?? 'dark'

  const [userTheme, setTheme] = useState(currentMode)

  const changeTheme = () => {
    const theme = userTheme === 'dark' ? 'light' : 'dark'
    setTheme(theme)
    window.localStorage.setItem('themeMode', JSON.stringify(theme))
  }

  return (
    <Context.Provider value={{ userTheme, changeTheme }}>
      {children}
    </Context.Provider>
  )
}

export default Context
