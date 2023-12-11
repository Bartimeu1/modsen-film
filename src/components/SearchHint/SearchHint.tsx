import React from 'react';
import { useGetMoviesQuery } from '@root/store/features/movies/movieApi';

import { StyledSearchHint, HintItem } from './styled';

interface ISearchHintProps {
  searchValue: string;
  isInputFocused: boolean;
  onAutocompleteClick: (value: string) => void;
}

function SearchHint(props: ISearchHintProps) {
  const { searchValue, isInputFocused, onAutocompleteClick } = props;

  const { data: moviesData } = useGetMoviesQuery({
    query: searchValue,
    page: 1,
  });

  return (
    searchValue &&
    moviesData &&
    moviesData.results.length > 0 &&
    isInputFocused && (
      <StyledSearchHint>
        {moviesData.results.map((item) => (
          <HintItem
            key={item.id}
            onMouseDown={() => onAutocompleteClick(item.title)}>
            {item.title}
          </HintItem>
        ))}
      </StyledSearchHint>
    )
  );
}

export default SearchHint;
