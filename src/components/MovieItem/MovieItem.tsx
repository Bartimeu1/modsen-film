import React from 'react';

import avatarImg from '@assets/images/avatar.png';
import noPosterImg from '@assets/images/noPoster.png';
import { POSTER_URL } from '@constants/url';
import { getYearByDate } from '@utils/helpers';

import {
  AvatarPhoto,
  MovieDetails,
  MovieInfo,
  MoviePoster,
  MovieText,
  MovieTitle,
  StyledMovieItem,
} from './styled';

interface IMovieItemProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  title: string;
  poster: string;
  year: Date;
}
function MovieItem(props: IMovieItemProps) {
  const { title, poster, year, onClick } = props;

  return (
    <StyledMovieItem onClick={onClick}>
      <MoviePoster url={poster ? `${POSTER_URL}/${poster}` : noPosterImg} />
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
