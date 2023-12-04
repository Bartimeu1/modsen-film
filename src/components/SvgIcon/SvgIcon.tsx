import React from 'react';

import { StyledSvgIcon } from './styled';

interface ISvgIconProps {
  icon: React.ElementType;
  testId?: string;
}

function SvgIcon({ icon, testId }: ISvgIconProps) {
  return <StyledSvgIcon as={icon} data-testid={testId} />;
}

export default SvgIcon;
