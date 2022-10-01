import { useState } from 'react'

export const useTheme = () => {
  const mode = window.localStorage.getItem('themeMode')
  const currentMode = JSON.parse(mode) ?? 'dark'

  const [userTheme, setTheme] = useState(currentMode)

  const changeTheme = () => {
    const theme = userTheme === 'dark' ? 'light' : 'dark'
    setTheme(theme)
    window.localStorage.setItem('themeMode', JSON.stringify(theme))
  }

  return { userTheme, changeTheme }
}
