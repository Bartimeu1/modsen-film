import React from 'react';
import { useAppSelector } from '../../utils/hooks';

import { IMovieItem } from '../../types/globalTypes';

import { StyledMovieList } from './styled';
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {
  const moviesList = useAppSelector((state) => state.movie.moviesList);

  return (
    <StyledMovieList>
      {moviesList.map((movie: IMovieItem) => (
        <MovieItem
          key={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          year={movie.release_date}
        />
      ))}
    </StyledMovieList>
  );
}

export default MovieList;
