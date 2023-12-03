import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

import {
  StyledMovieContent,
  ShowMoreButton,
  MovieContentError,
} from './styled';
import CategoryBar from '../CategoryBar/CategoryBar';
import MovieList from '../MovieList/MovieList';

import { useGetMoviesQuery } from '../../store/features/movies/movieApi';
import {
  updateMovieList,
  setCurrentApiPage,
} from '../../store/features/movies/movieSlice';
import { getLimitedMovieArray } from '../../utils/helpers';
import { errorText } from '../../constants/text';

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
