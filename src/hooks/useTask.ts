import { useContext } from 'react'
import { TasksContext } from '../contexts/TaskContext'

export const useTask = () => {
  const {
    tasks,
    handleDone,
    handleInput,
    handleSubmit,
    input,
    clearCompleted,
    deleteTask
  } = useContext(TasksContext)

  return {
    tasks,
    handleDone,
    handleInput,
    handleSubmit,
    input,
    clearCompleted,
    deleteTask
  }
}
