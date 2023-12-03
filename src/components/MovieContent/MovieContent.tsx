import React, { useEffect } from 'react';

import CategoryBar from '@components/CategoryBar/CategoryBar';
import MovieList from '@components/MovieList/MovieList';
import { errorText } from '@constants/text';
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
      {moviesData &&
        moviesData.total_results !== moviesState.moviesList.length && (
          <ShowMoreButton onClick={() => onShowMoreClick()}>
            Show More
          </ShowMoreButton>
        )}
      {error && <MovieContentError>{errorText}</MovieContentError>}
    </StyledMovieContent>
  );
}

export default MovieContent;
