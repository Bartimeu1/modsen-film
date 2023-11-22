import React from 'react';
import { useAppDispatch } from '../../utils/hooks';
import { toggleTheme } from '../../store/features/theme/themeSlice';

import { StyledHeader, Logo, LogoText, ToggleButton } from './styled';
import SearchBar from '../SearchBar/SearchBar';
import Icon from '../Icon/Icon';

import logoIcon from '../../assets/images/logo.svg';

function Header() {
  const dispatch = useAppDispatch();

  return (
    <StyledHeader>
      <Logo>
        <Icon src={logoIcon} alt="logo" />
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
