import React from 'react';

import { StyledSearchBar, SearchInput, SearchButton } from './styled';
import Icon from '../Icon/Icon';

import searchIcon from '../../assets/images/search.svg'

function SearchBar() {
  return (
    <StyledSearchBar>
      <SearchInput placeholder='Search' />
      <SearchButton>
        <Icon src={searchIcon} alt='earch'/>
      </SearchButton>
    </StyledSearchBar>
  )
}

export default SearchBar;