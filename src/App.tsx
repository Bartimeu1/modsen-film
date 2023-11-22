import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './constants/theme';
import GlobalStyle, { Container } from './GlobalStyle';
import Header from './components/Header/Header';

function App() {
  return (
    <ThemeProvider theme={theme['light']}>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
