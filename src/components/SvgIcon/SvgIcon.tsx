import React from 'react';

import { StyledSvgIcon } from './styled';

interface ISvgIconProps {
  icon: React.ElementType;
}

function SvgIcon({ icon }: ISvgIconProps) {
  return <StyledSvgIcon as={icon} />;
}

export default SvgIcon;
