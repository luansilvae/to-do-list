import { render } from 'react-dom'
import App from './App'
import { TaskProvider } from './contexts/TaskContext'
render(
  <TaskProvider>
    <App />
  </TaskProvider>,
  document.getElementById('root')
)
