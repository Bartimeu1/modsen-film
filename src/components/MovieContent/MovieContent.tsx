import React, { useEffect } from 'react';

import CategoryBar from '@components/CategoryBar/CategoryBar';
import MovieList from '@components/MovieList/MovieList';
import { errorText, nothingFoundedText } from '@constants/text';
import { useGetMoviesQuery } from '@store/features/movies/movieApi';
import {
  setCurrentApiPage,
  updateMovieList,
} from '@store/features/movies/movieSlice';
import { getLimitedMovieArray } from '@utils/helpers';
import { useAppDispatch, useAppSelector } from '@utils/hooks';

import {
  MovieContentError,
  ShowMoreButton,
  StyledMovieContent,
  MovieListEmpty,
} from './styled';

function MovieContent() {
  const dispatch = useAppDispatch();
  const moviesState = useAppSelector((state) => state.movie);

  const {
    data: moviesData,
    error,
    isFetching,
    refetch,
  } = useGetMoviesQuery({
    with_genres: moviesState.currentCategoryId || '',
    ...(moviesState.currentSearch && { query: moviesState.currentSearch }),
    page: moviesState.currentApiPage,
  });

  useEffect(() => {
    refetch();
  }, [moviesState.currentSearch]);

  useEffect(() => {
    dispatch(setCurrentApiPage({ page: 1 }));
  }, [moviesState.currentSearch, moviesState.currentCategoryId]);

  useEffect(() => {
    if (moviesData) {
      dispatch(
        updateMovieList({
          newMovieList: getLimitedMovieArray(moviesData.results, 16),
        }),
      );
    }
  }, [moviesData]);

  const onShowMoreClick = () => {
    dispatch(setCurrentApiPage({ page: moviesState.currentApiPage + 1 }));
  };

  return (
    <StyledMovieContent>
      <CategoryBar />
      <MovieList isFetching={isFetching} />
      {moviesData && moviesData.total_pages !== moviesState.currentApiPage && (
        <ShowMoreButton
          onClick={() => onShowMoreClick()}
          data-testid="show-more-button">
          Show More
        </ShowMoreButton>
      )}
      {moviesData?.total_results === 0 && (
        <MovieListEmpty data-testid="movie-list-empty">
          {nothingFoundedText}
        </MovieListEmpty>
      )}
      {error && (
        <MovieContentError data-testid="movie-list-error">
          {errorText}
        </MovieContentError>
      )}
    </StyledMovieContent>
  );
}

export default MovieContent;
