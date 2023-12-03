import React, { useState } from 'react';

import MovieItem from '@components/MovieItem/MovieItem';
import MovieModal from '@components/MovieModal/MovieModal';
import MovieSkeletonLoader from '@components/MovieSkeletonLoader/MovieSkeletonLoader';
import { IMovieItem } from '@root/types/globalTypes';
import { useAppSelector } from '@utils/hooks';

import { StyledMovieList } from './styled';

function MovieList({ isFetching }: { isFetching: boolean }) {
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
        Array.from({ length: 16 }).map((_, index) => (
          <MovieSkeletonLoader key={index} />
        ))}
      {selectedMovieItem && (
        <MovieModal movie={selectedMovieItem} onClose={handleCloseModal} />
      )}
    </StyledMovieList>
  );
}

export default MovieList;
