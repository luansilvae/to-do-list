import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'

import { GlobalStyles } from './styles/global'

import { themes } from './styles/themes'

function App() {
  return (
    <ThemeProvider theme={themes.dark}>
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
