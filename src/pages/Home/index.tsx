import React, { useMemo } from 'react'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import {
  Container,
  Header,
  Input,
  List,
  FooterList,
  ToggleThemeButton
} from './styles'

import { ListItem } from '../../components/ListItem'
import { useTask } from '../../hooks/useTask'
import { useTheme } from '../../hooks/useTheme'

export const Home: React.FC = () => {
  const {
    handleSubmit,
    handleInput,
    tasks,
    input,
    clearCompleted,
    deleteTask
  } = useTask()

  const { toggleTheme, themeName } = useTheme()

  const leftTasks = useMemo(
    () => tasks.filter(task => !task.done).length,
    [tasks]
  )

  const completedTasks = useMemo(
    () => tasks.filter(task => task.done).length,
    [tasks]
  )

  return (
    <Container>
      <Header>
        <div className="top">
          <h1>TODO</h1>

          <ToggleThemeButton onClick={toggleTheme}>
            {themeName === 'dark' ? (
              <BsSunFill color="#fff700" />
            ) : (
              <BsMoonFill color="#2f80ed" />
            )}
          </ToggleThemeButton>
        </div>

        <Input onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Create a new todo..."
          />
          <button type="submit">Add</button>
        </Input>
      </Header>

      {tasks.length === 0 ? (
        <strong>Nothing to do...</strong>
      ) : (
        <List>
          {tasks.map(task => (
            <ListItem key={task.id} done={task.done} id={task.id}>
              <span>{task.name}</span>
              <button onClick={() => deleteTask(task.id)}>&#x2715;</button>
            </ListItem>
          ))}
          <FooterList>
            <span>
              {leftTasks === 0
                ? 'All tasks completed!'
                : `${leftTasks} tasks left`}
            </span>

            {completedTasks > 0 && (
              <button onClick={clearCompleted}>Clear completed</button>
            )}
          </FooterList>
        </List>
      )}
    </Container>
  )
}
