// src/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

 body {
    
    background: linear-gradient(
      to right,
rgb(0, 0, 0) 0%,
rgb(71, 145, 255) 100%
    );
    min-height: 100vh;
  }
`;
