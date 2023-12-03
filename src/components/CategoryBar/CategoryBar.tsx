import React, { useEffect } from 'react';

import { ReactComponent as ErrorIcon } from '@assets/images/error.svg';
import SvgIcon from '@components/SvgIcon/SvgIcon';
import { ICategoryItem } from '@root/types/globalTypes';
import { useGetCategoriesQuery } from '@store/features/movies/movieApi';
import {
  setMovieCategory,
  updateCategoriesList,
} from '@store/features/movies/movieSlice';
import { useAppDispatch, useAppSelector } from '@utils/hooks';

import { CategoryButton, StyledCategoryBar } from './styled';

function CategoryBar() {
  const dispatch = useAppDispatch();
  const categoriesList = useAppSelector((state) => state.movie.categoriesList);
  const currentCategoryId = useAppSelector(
    (state) => state.movie.currentCategoryId,
  );

  const { data: categoriesData, error } = useGetCategoriesQuery();

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
      {error ? (
        <SvgIcon icon={ErrorIcon} />
      ) : (
        categoriesList.map((item: ICategoryItem) => (
          <CategoryButton
            key={item.id}
            iscurrent={item.id === currentCategoryId ? 'true' : 'false'}
            onClick={() => onCategoryButtonClick(item.id)}>
            {item.name}
          </CategoryButton>
        ))
      )}
    </StyledCategoryBar>
  );
}

export default CategoryBar;
