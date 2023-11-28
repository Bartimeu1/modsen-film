import React from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { useGetCategoriesQuery } from '../../store/features/movies/movieApi';

import { setMovieCategory } from '../../store/features/movies/movieSlice';
import { StyledCategoryBar, CategoryButton } from './styled';

import { ICategoryItem } from '../../types/globalTypes';

function CategoryBar() {
  const dispatch = useAppDispatch();
  const currentCategoryId = useAppSelector((state) => state.movie.categoryId);

  const { data: categoriesData } = useGetCategoriesQuery();

  const onCategoryButtonClick = (categoryId: number) => {
    dispatch(setMovieCategory({ categoryId }));
  };

  return (
    <StyledCategoryBar>
      {categoriesData?.genres.map((item: ICategoryItem) => (
        <CategoryButton
          key={item.id}
          isCurrent={item.id === currentCategoryId}
          onClick={() => onCategoryButtonClick(item.id)}>
          {item.name}
        </CategoryButton>
      ))}
    </StyledCategoryBar>
  );
}

export default CategoryBar;
