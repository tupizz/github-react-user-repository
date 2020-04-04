import { createGlobalStyle } from 'styled-components';
import { constants } from './constants';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background-color: ${constants.primaryColor};
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-size: 14px;
    font-family: 'Titillium Web', Helvetica, sans-serif;
    font-weight: 100;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
