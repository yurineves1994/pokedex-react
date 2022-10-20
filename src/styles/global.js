import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Montserrat", sans-serif;
  }

  html {
   background-color: #eff3f6;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  img {
    max-width: 100%;
  }

`;
