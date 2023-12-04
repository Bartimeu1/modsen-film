import React, { useEffect, useState } from 'react';

import {
  setMovieCategory,
  updateMovieSearch,
} from '@store/features/movies/movieSlice';
import { useAppDispatch, useAppSelector } from '@utils/hooks';

import {
  SearchButton,
  SearchInput,
  StyledSearchBar,
  StyledSearchIcon,
} from './styled';

function SearchBar() {
  const dispatch = useAppDispatch();
  const currentCategory = useAppSelector(
    (state) => state.movie.currentCategoryId,
  );

  const [searchValue, setSearchValue] = useState('');

  const changeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onSearchButtonClick = () => {
    dispatch(setMovieCategory({ categoryId: 0 }));
    dispatch(updateMovieSearch({ value: searchValue }));
  };

  useEffect(() => {
    if (currentCategory !== 0) {
      setSearchValue('');
      dispatch(updateMovieSearch({ value: '' }));
    }
  }, [currentCategory]);

  return (
    <StyledSearchBar data-testid="search-bar">
      <SearchInput
        placeholder="Search"
        value={searchValue}
        onChange={(e) => changeSearchValue(e)}
      />
      <SearchButton onClick={() => onSearchButtonClick()}>
        <StyledSearchIcon />
      </SearchButton>
    </StyledSearchBar>
  );
}

export default SearchBar;
