import React from 'react';

import {
  StyledSearchBar,
  SearchInput,
  SearchButton,
  StyledSearchIcon,
} from './styled';

function SearchBar() {
  return (
    <StyledSearchBar>
      <SearchInput placeholder="Search" />
      <SearchButton>
        <StyledSearchIcon />
      </SearchButton>
    </StyledSearchBar>
  );
}

export default SearchBar;
