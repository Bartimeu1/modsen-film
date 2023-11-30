import React, { useState } from 'react';
import { useAppSelector } from '../../utils/hooks';

import { IMovieItem } from '../../types/globalTypes';

import { StyledMovieList } from './styled';
import MovieItem from '../MovieItem/MovieItem';
import MovieSkeletonLoader from '../MovieSkeletonLoader/MovieSkeletonLoader';
import MovieModal from '../MovieModal/MovieModal';

function MovieList({ isFetching }: { isFetching: Boolean }) {
  const moviesList = useAppSelector((state) => state.movie.moviesList);

  const [selectedMovieItem, setSelectedMovieItem] = useState<IMovieItem | null>(
    null,
  );

  const handleMovieItemClick = (item: IMovieItem) => {
    setSelectedMovieItem(item);
  };

  const handleCloseModal = () => {
    setSelectedMovieItem(null);
  };

  return (
    <StyledMovieList>
      {moviesList.map((movie: IMovieItem) => (
        <MovieItem
          key={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          year={movie.release_date}
          onClick={() => handleMovieItemClick(movie)}
        />
      ))}
      {isFetching &&
        Array.from({ length: 16 }).map(() => <MovieSkeletonLoader />)}
      {selectedMovieItem && (
        <MovieModal movie={selectedMovieItem} onClose={handleCloseModal} />
      )}
    </StyledMovieList>
  );
}

export default MovieList;
