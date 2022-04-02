import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Titillium Web', sans-serif;
}

:root {
  ${props => {
    const theme = props.theme
    let append = ''
    Object.entries(theme).forEach(([prop, value]) => {
      append += `--${prop}: ${value};`
    })
    return append
  }}

  --white: #fff;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--background);
}

ol,
ul {
  list-style: none;
}

a {
  text-decoration: none;
}
`
