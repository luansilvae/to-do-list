import React, {
  ChangeEvent,
  createContext,
  FormEvent,
  ReactNode,
  useState
} from 'react'

import { v4 as uuidv4 } from 'uuid'

import { TaskProps, TaskContextData } from './TaskProps'

interface Props {
  children: ReactNode
}

export const TasksContext = createContext({} as TaskContextData)

export const TaskProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<TaskProps[]>(() => {
    const storageItem = localStorage.getItem('tasks')

    if (storageItem) {
      return JSON.parse(storageItem)
    } else return []
  })

  const [input, setInput] = useState<string>('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const newTask = input.trim()

    if (newTask === '') {
      return
    }

    setTasks([...tasks, { id: uuidv4(), name: input, done: false }])
    localStorage.setItem(
      'tasks',
      JSON.stringify([...tasks, { id: uuidv4(), name: input, done: false }])
    )
    setInput('')
  }

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleDone = (index: string) => {
    setTasks((prev: TaskProps[]) => {
      const doneTask = prev.reduce((acc, task) => {
        if (task.id === index) {
          if (task.done) return [...acc, { ...task, done: false }]
          return [...acc, { ...task, done: true }]
        } else {
          return [...acc, task]
        }
      }, [] as TaskProps[])

      localStorage.setItem('tasks', JSON.stringify(doneTask))
      return doneTask as TaskProps[]
    })
  }

  const clearCompleted = () => {
    setTasks((prev: TaskProps[]) => {
      const leftTasks = prev.filter(task => !task.done)

      localStorage.setItem('tasks', JSON.stringify(leftTasks))
      return leftTasks
    })
  }

  const deleteTask = (id: string) => {
    setTasks((prev: TaskProps[]) => {
      const leftTasks = prev.filter(task => task.id !== id)

      localStorage.setItem('tasks', JSON.stringify(leftTasks))
      return leftTasks
    })
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        handleDone,
        handleSubmit,
        handleInput,
        input,
        clearCompleted,
        deleteTask
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
