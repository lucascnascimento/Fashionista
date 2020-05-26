import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";

import styled from "styled-components";

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
  }

  body, button, input{
    font: 14px sans-serif;
  }

  button{
    cursor: pointer;
  }
`;
