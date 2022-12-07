import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

import { ThemeProvider } from './context/ThemeContext'
import { GlobalStyles } from './styles/GlobalStyles'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <GlobalStyles />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
