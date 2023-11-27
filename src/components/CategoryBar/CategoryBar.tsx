import React from 'react';
import { useAppDispatch } from '../../utils/hooks';
import { useGetCategoriesQuery } from '../../store/features/movies/movieApi';

import {
  setMovieCategory,
  updateMovieSearch,
} from '../../store/features/movies/movieSlice';
import { StyledCategoryBar, CategoryButton } from './styled';

import { ICategoryItem } from '../../types/globalTypes';

function CategoryBar() {
  const { data: categoriesData } = useGetCategoriesQuery();
  const dispatch = useAppDispatch();

  const onCategoryButtonClick = (categoryId: number) => {
    dispatch(setMovieCategory({ categoryId }));
    dispatch(updateMovieSearch({ value: '' }));
  };

  return (
    <StyledCategoryBar>
      {categoriesData?.genres.map((item: ICategoryItem) => (
        <CategoryButton
          key={item.id}
          onClick={() => onCategoryButtonClick(item.id)}>
          {item.name}
        </CategoryButton>
      ))}
    </StyledCategoryBar>
  );
}

export default CategoryBar;
