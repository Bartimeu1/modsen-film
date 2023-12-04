import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { BASE_VIDEO_URL } from '@constants/url';
import { IMovieItem } from '@root/types/globalTypes';
import { useGetVideoByMovieIdQuery } from '@store/features/movies/movieApi';

import {
  ModalCloseButton,
  ModalContent,
  ModalVideo,
  MovieTitle,
  StyledMovieModal,
} from './styled';

interface IMovieModalProps {
  onClose: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  movie: IMovieItem;
}

function MovieModal(props: IMovieModalProps) {
  const { movie, onClose } = props;

  const { data: videoData, isLoading } = useGetVideoByMovieIdQuery({
    movieId: movie.id,
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const onModalContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <StyledMovieModal onClick={onClose} data-testid="movie-modal">
      <ModalContent
        onClick={(e) => {
          onModalContentClick(e);
        }}>
        <ModalCloseButton
          onClick={(e) => onClose(e)}
          data-testid="movie-modal-close"
        />
        <MovieTitle>{movie.title}</MovieTitle>
        {isLoading ? (
          <div>load</div>
        ) : (
          <ModalVideo
            width="560"
            height="315"
            allow="autoplay; encrypted-media"
            allowFullScreen
            src={`${BASE_VIDEO_URL}/${videoData?.results[0].key}?&autoplay=1`}
          />
        )}
      </ModalContent>
    </StyledMovieModal>,
    document.body,
  );
}

export default MovieModal;
