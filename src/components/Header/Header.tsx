import React, { useState } from 'react';

import logoIcon from '@assets/images/logo.png';
import BurgerMenu from '@components//BurgerMenu/BurgerMenu';
import SearchBar from '@components/SearchBar/SearchBar';
import { toggleTheme } from '@store/features/theme/themeSlice';
import { useAppDispatch } from '@utils/hooks';

import {
  HeaderTopper,
  Logo,
  LogoImg,
  LogoText,
  StyledHeader,
  ToggleButton,
  ToggleContainer,
} from './styled';

function Header() {
  const dispatch = useAppDispatch();

  const [isBurgerActive, setIsBurgerActive] = useState(false);

  return (
    <StyledHeader>
      <HeaderTopper>
        <Logo>
          <LogoImg src={logoIcon} />
          <LogoText>ModsenFilms</LogoText>
        </Logo>
        <BurgerMenu
          isActive={isBurgerActive}
          onClick={() => {
            setIsBurgerActive((prevState) => !prevState);
          }}
        />
      </HeaderTopper>
      <SearchBar />
      <ToggleContainer isburgeractive={isBurgerActive.toString()}>
        <ToggleButton
          data-testid="toggle-theme-button"
          type="checkbox"
          onClick={() => {
            dispatch(toggleTheme());
          }}
        />
      </ToggleContainer>
    </StyledHeader>
  );
}

export default Header;
