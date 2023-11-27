import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';

import { useGetMoviesQuery } from '../../store/features/movies/movieApi';
import { updateMovieList } from '../../store/features/movies/movieSlice';
import { IMovieItem } from '../../types/globalTypes';

import { StyledVideoList } from './styled';
import VideoItem from '../VideoItem/VideoItem';

function VideoList() {
  const dispatch = useAppDispatch();
  const moviesState = useAppSelector((state) => state.movie);

  const { data: moviesData, refetch } = useGetMoviesQuery({
    ...(moviesState.currentSearch && { query: moviesState.currentSearch }),
    with_genres: moviesState.categoryId,
  });

  useEffect(() => {
    refetch();
  }, [moviesState.currentSearch]);

  useEffect(() => {
    if (moviesData) {
      dispatch(updateMovieList({ newMovieList: moviesData.results }));
    }
  }, [moviesData]);

  return (
    <StyledVideoList>
      {moviesState.moviesList &&
        moviesState.moviesList.map((movie: IMovieItem) => (
          <VideoItem
            key={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            year={movie.release_date}
          />
        ))}
    </StyledVideoList>
  );
}

export default VideoList;
