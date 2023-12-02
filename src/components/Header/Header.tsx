import React, { useState } from 'react';
import { useAppDispatch } from '../../utils/hooks';
import { toggleTheme } from '../../store/features/theme/themeSlice';

import {
  StyledHeader,
  HeaderTopper,
  Logo,
  LogoText,
  LogoImg,
  ToggleContainer,
  ToggleButton,
} from './styled';
import SearchBar from '../SearchBar/SearchBar';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import logoIcon from '../../assets/images/logo.png';

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
      <ToggleContainer isBurgerActive={isBurgerActive}>
        <ToggleButton
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
