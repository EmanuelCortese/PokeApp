import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

import { GlobalStyles } from './styles/GlobalStyles'
import { ThemeProvider } from './context/ThemeContext'

createRoot(
  document.getElementById('root')
).render(
  <BrowserRouter>
    <GlobalStyles />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
