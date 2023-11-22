import React from 'react';

import { StyledHeader, Logo, LogoText, ToggleButton } from './styled';
import Icon from '../Icon/Icon';
import SearchBar from '../SearchBar/SearchBar';

import logoIcon from '../../assets/images/logo.svg';

function Header() {
  return (
    <StyledHeader>
      <Logo>
        <Icon src={logoIcon} alt="logo" />
        <LogoText>ModsenFilms</LogoText>
      </Logo>
      <SearchBar />
      <ToggleButton type='checkbox' />
    </StyledHeader>
  );
}

export default Header;
