import { ChangeEvent, FormEvent } from 'react'

export interface TaskProps {
  id: string
  name: string
  done: boolean
}

export interface TaskContextData {
  tasks: TaskProps[]
  input: string
  handleDone: (index: string) => void
  handleSubmit: (event: FormEvent) => void
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void
  clearCompleted: () => void
  deleteTask: (id: string) => void
}
