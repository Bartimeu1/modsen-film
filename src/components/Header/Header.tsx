import React from 'react';
import { useAppDispatch } from '../../utils/hooks';
import { toggleTheme } from '../../store/features/theme/themeSlice';

import { StyledHeader, Logo, LogoText, LogoImg, ToggleButton } from './styled';
import SearchBar from '../SearchBar/SearchBar';

import  logoIcon from '../../assets/images/logo.png';

function Header() {
  const dispatch = useAppDispatch();

  return (
    <StyledHeader>
      <Logo>
        <LogoImg src={logoIcon} />
        <LogoText>ModsenFilms</LogoText>
      </Logo>
      <SearchBar />
      <ToggleButton
        type="checkbox"
        onClick={() => {
          dispatch(toggleTheme());
        }}
      />
    </StyledHeader>
  );
}

export default Header;
