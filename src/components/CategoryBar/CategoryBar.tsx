import React from 'react';

import { StyledCategoryBar, CategoryButton } from './styled';

import { videoCategories } from '../../constants/common';

function CategoryBar() {
  return (
    <StyledCategoryBar>
      {videoCategories.map((item) => (
        <CategoryButton key={item.id}>{item.name}</CategoryButton>
      ))}
    </StyledCategoryBar>
  );
}

export default CategoryBar;
