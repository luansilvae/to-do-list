import styled, { css } from 'styled-components'

interface ListProps {
  done: boolean
}

export const Container = styled.li<ListProps>`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;

  &:nth-child(2n + 1) {
    background-color: var(--backgroundSecondary);
  }

  > span {
    font-size: 18px;
    font-weight: 400;
    position: relative;
    color: var(--text);
    line-height: 1.6;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${props =>
    props.done &&
    css`
      span {
        opacity: 0.4;
        text-decoration: solid line-through 2px;
      }
    `}

  > button {
    background: transparent;
    border: 0;
    padding: 0 5px;
    margin-left: auto;
    cursor: pointer;
    color: var(--gray);
    font-weight: 400;

    font-size: 18px;
  }
`

export const Checkbox = styled.div`
  display: flex;
  justify-content: stretch;

  > input {
    height: 25px;
    width: 25px;
    cursor: pointer;
  }
`
