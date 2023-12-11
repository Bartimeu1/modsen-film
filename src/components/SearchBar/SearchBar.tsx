import React, { useEffect, useState } from 'react';

import {
  setMovieCategory,
  updateMovieSearch,
} from '@store/features/movies/movieSlice';
import { useAppDispatch, useAppSelector } from '@utils/hooks';

import SearchHint from '@components/SearchHint/SearchHint';
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
  const [isInputFocused, setIsInputFocused] = useState(false);

  const changeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onAutocompleteClick = (value: string) => {
    setSearchValue(value);
    dispatch(updateMovieSearch({ value }));
    dispatch(setMovieCategory({ categoryId: 0 }));
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
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      />
      <SearchHint
        searchValue={searchValue}
        isInputFocused={isInputFocused}
        onAutocompleteClick={onAutocompleteClick}
      />
      <SearchButton onClick={() => onSearchButtonClick()}>
        <StyledSearchIcon />
      </SearchButton>
    </StyledSearchBar>
  );
}

export default SearchBar;
