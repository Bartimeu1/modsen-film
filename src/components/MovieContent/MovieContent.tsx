import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

import { StyledMovieContent, ShowMoreButton } from './styled';
import CategoryBar from '../CategoryBar/CategoryBar';
import MovieList from '../MovieList/MovieList';

import { useGetMoviesQuery } from '../../store/features/movies/movieApi';
import {
  updateMovieList,
  setCurrentApiPage,
} from '../../store/features/movies/movieSlice';
import { getLimitedMovieArray } from '../../utils/helpers';

function MovieContent() {
  const dispatch = useAppDispatch();
  const moviesState = useAppSelector((state) => state.movie);

  const {
    data: moviesData,
    isLoading,
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
      <MovieList isLoading={isLoading} />
      {moviesData &&
        moviesData.total_results !== moviesState.moviesList.length && (
          <ShowMoreButton onClick={() => onShowMoreClick()}>
            Show More
          </ShowMoreButton>
        )}
    </StyledMovieContent>
  );
}

export default MovieContent;
