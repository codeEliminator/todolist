import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TasksProvider } from './Providers/TasksProvider'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </StrictMode>,
)
