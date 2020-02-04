import { createGlobalStyle } from 'styled-components';
import { color } from '../shared/variables';

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
    background-color: ${color.outer_space};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important;
  }
  button {
    cursor: pointer;
  }
`;
