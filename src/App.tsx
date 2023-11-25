import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './utils/hooks';

import theme from './constants/theme';
import GlobalStyle, { Container } from './GlobalStyle';

import Header from './components/Header/Header';
import VideoContent from './components/VideoContent/VideoContent';
import Footer from './components/Footer/Footer';

function App() {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Container>
        <Header />
        <VideoContent />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
