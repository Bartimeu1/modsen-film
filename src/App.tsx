import React from 'react';

import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import MovieContent from '@components/MovieContent/MovieContent';
import theme from '@constants/theme';
import { ThemeProvider } from 'styled-components';

import GlobalStyle, { Container } from './GlobalStyle';
import { useAppSelector } from './utils/hooks';

function App() {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Container>
        <Header />
        <MovieContent />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
