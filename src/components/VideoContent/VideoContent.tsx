import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

import { StyledVideoContent, ShowMoreButton } from './styled';
import CategoryBar from '../CategoryBar/CategoryBar';
import VideoList from '../VideoList/VideoList';

import { useGetMoviesQuery } from '../../store/features/movies/movieApi';
import {
  updateMovieList,
  setCurrentApiPage,
} from '../../store/features/movies/movieSlice';
import { getLimitedMovieArray } from '../../utils/helpers';

function VideoContent() {
  const dispatch = useAppDispatch();
  const moviesState = useAppSelector((state) => state.movie);

  const { data: moviesData, refetch } = useGetMoviesQuery({
    ...(moviesState.currentSearch && { query: moviesState.currentSearch }),
    with_genres: moviesState.currentCategoryId || '',
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
    <StyledVideoContent>
      <CategoryBar />
      <VideoList />
      {moviesData &&
        moviesData.total_results !== moviesState.moviesList.length && (
          <ShowMoreButton onClick={() => onShowMoreClick()}>
            Show More
          </ShowMoreButton>
        )}
    </StyledVideoContent>
  );
}

export default VideoContent;
