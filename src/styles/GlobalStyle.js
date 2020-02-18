import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif;

  }

  a {
    text-decoration: none;
    color: #000;
  }

  input {
    border: none;
    outline: none;
  }

  html, body {
    box-sizing: border-box;
    background-color: #efefef;
  }

  #root {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
`