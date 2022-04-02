import styled from 'styled-components'

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;

  > strong {
    font-size: 18px;
    color: var(--text);
  }
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      letter-spacing: 7px;
      color: var(--text);
      font-size: 38px;
    }
  }
`

export const ToggleThemeButton = styled.button`
  width: 38px;
  height: 38px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--backgroundSecondary);
  border: solid 1px var(--border);

  svg {
    width: 20px;
    height: 20px;
  }
`

export const Input = styled.form`
  width: 100%;
  display: flex;
  gap: 20px;

  input {
    border: solid 1px var(--border);
    border-radius: 4px;
    padding: 10px;
    outline: none;
    color: var(--text);
    font-weight: 600;
    width: 100%;
    font-size: 18px;
    background-color: var(--backgroundSecondary);

    ::placeholder {
      opacity: 0.6;
    }

    &:focus {
      border-color: var(--primary);
    }
  }

  button {
    border: none;
    background-color: var(--primary);
    color: var(--white);
    font-weight: 600;
    font-size: 16px;
    padding: 8px;
    width: 100px;
    border-radius: 4px;
    cursor: pointer;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  border: solid 1px var(--border);
  border-radius: 4px;
`
export const FooterList = styled.li`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span,
  button {
    color: var(--gray);
    font-weight: 600;
    font-size: 15px;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
`
