import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  
  body {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
  }
`;

export default GlobalStyle;
