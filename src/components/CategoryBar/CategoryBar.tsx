import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

import { useGetCategoriesQuery } from '../../store/features/movies/movieApi';
import {
  setMovieCategory,
  updateCategoriesList,
} from '../../store/features/movies/movieSlice';
import { StyledCategoryBar, CategoryButton } from './styled';

import { ICategoryItem } from '../../types/globalTypes';

function CategoryBar() {
  const dispatch = useAppDispatch();
  const categoriesList = useAppSelector((state) => state.movie.categoriesList);
  const currentCategoryId = useAppSelector(
    (state) => state.movie.currentCategoryId,
  );

  const { data: categoriesData } = useGetCategoriesQuery();

  useEffect(() => {
    if (categoriesData) {
      dispatch(
        updateCategoriesList({
          newCategoriesList: categoriesData.genres,
        }),
      );
    }
  }, [categoriesData]);

  const onCategoryButtonClick = (categoryId: number) => {
    dispatch(setMovieCategory({ categoryId }));
  };

  return (
    <StyledCategoryBar>
      {categoriesList.map((item: ICategoryItem) => (
        <CategoryButton
          key={item.id}
          iscurrent={item.id === currentCategoryId}
          onClick={() => onCategoryButtonClick(item.id)}>
          {item.name}
        </CategoryButton>
      ))}
    </StyledCategoryBar>
  );
}

export default CategoryBar;
