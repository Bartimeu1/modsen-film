import React, { useState } from 'react';
import { useAppDispatch } from '../../utils/hooks';

import { updateMovieSearch } from '../../store/features/movies/movieSlice';

import {
  StyledSearchBar,
  SearchInput,
  SearchButton,
  StyledSearchIcon,
} from './styled';

function SearchBar() {
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState('');

  const changeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onSearchButtonClick = () => {
    dispatch(updateMovieSearch({ value: searchValue }));
  };

  return (
    <StyledSearchBar>
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
