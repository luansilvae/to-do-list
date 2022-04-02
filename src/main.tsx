import { render } from 'react-dom'
import App from './App'
import { TaskProvider } from './contexts/TaskContext'
import { ThemeProvider } from './contexts/ThemeContext'
render(
  <TaskProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </TaskProvider>,
  document.getElementById('root')
)
