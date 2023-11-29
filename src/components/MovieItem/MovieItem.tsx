import React from 'react';

import { getYearByDate } from '../../utils/helpers';
import { POSTER_URL } from '../../constants/url';
import {
  StyledMovieItem,
  MoviePoster,
  MovieInfo,
  AvatarPhoto,
  MovieText,
  MovieTitle,
  MovieDetails,
} from './styled';

import avatarImg from '../../assets/images/avatar.png';
import noPosterImg from '../../assets/images/noPoster.png';

interface IMovieItemProps {
  title: string;
  poster: string;
  year: Date;
}
function MovieItem(props: IMovieItemProps) {
  const { title, poster, year } = props;

  return (
    <StyledMovieItem>
      <MoviePoster url={poster ? `${POSTER_URL}${poster}` : noPosterImg} />
      <MovieInfo>
        <AvatarPhoto src={avatarImg} />
        <MovieText>
          <MovieTitle>{title}</MovieTitle>
          <MovieDetails>{getYearByDate(year)}</MovieDetails>
        </MovieText>
      </MovieInfo>
    </StyledMovieItem>
  );
}

export default MovieItem;
