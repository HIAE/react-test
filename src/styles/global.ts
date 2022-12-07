import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme['gray-800']};
    color: ${({ theme }) => theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }
`