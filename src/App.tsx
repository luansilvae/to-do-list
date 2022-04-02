import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useTheme } from './hooks/useTheme'
import { Home } from './pages/Home'

import { GlobalStyles } from './styles/global'

function App() {
  const { currentTheme } = useTheme()

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
