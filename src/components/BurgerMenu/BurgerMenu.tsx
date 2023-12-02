import React from 'react';

import { StyledBurgerMenu, BurgerRow } from './styled';

interface IBurgerMenuProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isActive: Boolean;
}

function BurgerMenu(props: IBurgerMenuProps) {
  const { onClick, isActive } = props;

  return (
    <StyledBurgerMenu onClick={onClick} isActive={isActive}>
      <BurgerRow />
    </StyledBurgerMenu>
  );
}

export default BurgerMenu;
