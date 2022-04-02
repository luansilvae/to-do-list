import React, { ReactNode } from 'react'
import { useTask } from '../../hooks/useTask'

import { Container, Checkbox } from './styles'

interface ListProps {
  id: string
  done: boolean
  children: ReactNode
}

export const ListItem: React.FC<ListProps> = ({ id, done, children }) => {
  const { handleDone } = useTask()

  return (
    <Container id={id} done={done}>
      <Checkbox>
        <input
          type="checkbox"
          id={id}
          onChange={() => handleDone(id)}
          defaultChecked={done}
        />
        <label htmlFor={id}></label>
      </Checkbox>

      {children}
    </Container>
  )
}
