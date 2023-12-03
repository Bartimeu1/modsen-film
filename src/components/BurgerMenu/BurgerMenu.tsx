import React from 'react';

import { BurgerRow, StyledBurgerMenu } from './styled';

interface IBurgerMenuProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
}

function BurgerMenu(props: IBurgerMenuProps) {
  const { onClick, isActive } = props;

  return (
    <StyledBurgerMenu onClick={onClick} isactive={isActive.toString()}>
      <BurgerRow />
    </StyledBurgerMenu>
  );
}

export default BurgerMenu;
