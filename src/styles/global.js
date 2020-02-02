import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: transparent;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
  }
  html, body, #root{
    height: 100%;
  }
  body{
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important;
  }
  button {
    cursor: pointer;
  }
`;
