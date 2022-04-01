import React, { ChangeEvent, FormEvent, useState } from 'react'

import style from './Home.module.scss'

import { v4 as uuidv4 } from 'uuid'

interface TaskProps {
  id: string
  name: string
  done: boolean
}

export const Home: React.FC = () => {
  const [tasks, setTasks] = useState<TaskProps[]>(() => {
    const storageItem = localStorage.getItem('tasks')

    if (storageItem) {
      return JSON.parse(storageItem)
    } else return []
  })

  const [input, setInput] = useState<string>('')

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    setTasks([...tasks, { id: uuidv4(), name: input, done: false }])
    localStorage.setItem(
      'tasks',
      JSON.stringify([...tasks, { id: uuidv4(), name: input, done: false }])
    )
    setInput('')
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
      return doneTask
    })
  }

  return (
    <div className={style.container}>
      <div className={style.headerTodo}>
        <h1>Lista de Tarefas</h1>

        <form className={style.input} onSubmit={handleSubmit}>
          <label htmlFor="to-do">Nova tarefa: </label>
          <input type="text" value={input} onChange={handleInput} />
        </form>
      </div>

      {tasks.length === 0 ? (
        <h2>Nenhuma tarefa cadastrada</h2>
      ) : (
        <ul className={style.list}>
          {tasks.map(task => (
            <li key={task.id} className={task.done ? style.done : ''}>
              <div className={style.formGroup}>
                <input
                  type="checkbox"
                  id={task.id}
                  onChange={() => handleDone(task.id)}
                />
                <label htmlFor={task.id}></label>
              </div>
              <span>{task.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
