import React from 'react';
import { useAppSelector } from '../../utils/hooks';

import { IMovieItem } from '../../types/globalTypes';

import { StyledVideoList } from './styled';
import VideoItem from '../VideoItem/VideoItem';

function VideoList() {
  const moviesList = useAppSelector((state) => state.movie.moviesList);

  return (
    <StyledVideoList>
      {moviesList.map((movie: IMovieItem) => (
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
