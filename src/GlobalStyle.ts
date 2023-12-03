import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  html {
    box-sizing: border-box;
    height: 100%;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    position: relative;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  body {
    background: ${(props) => props.theme.color.background};
    font-family: 'Roboto', sans-serif;
    height: 100%;
  }

  #root {
    height: 100%;
  }

  button {
    background-color: inherit;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1470px;
  padding: 0 15px;
  margin: 0 auto;

  @media (max-width: 650px) {
    padding: 0 17px;
  }
`;

export default GlobalStyle;
