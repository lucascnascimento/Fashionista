import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${Normalize}

  *{
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-border-box;
    }

  body{
  -webkit-font-smoothing: antialiased;
  background:#f8f8f8
  }

  html {
  overflow-y: scroll;
  }

  body, button, input{
    font: 12px Montserrat, sans-serif;
  }

  button{
    cursor: pointer;
  }

`;
