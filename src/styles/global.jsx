import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo';
  }

  #root{
    margin: 0 auto;
    max-width: 767px;
    min-height: 100%;
    position: relative;
    background: #fff;
  }
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color: #5B5555;
    font-size: 14px;
    background: #5B5555;
    overflow: hidden;
  }

  button,a{
    cursor: pointer;
  }

  input {
    outline: none;
  }

  input::placeholder{
    color: #B6B3B3;
  }
`;

export default GlobalStyle;
