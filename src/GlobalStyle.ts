import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  button {
    background-color: inherit;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1456px;
  padding: 0 8px; 
  margin: 0 auto;
`;

export default GlobalStyle;
