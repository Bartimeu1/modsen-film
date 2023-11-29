import styled from 'styled-components';

interface MoviePosterProps {
  url: string;
}

export const StyledMovieItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 62px;
`;

export const MoviePoster = styled.div<MoviePosterProps>`
  width: 332px;
  height: 186px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 12px;
`;

export const MovieInfo = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const MovieText = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

export const AvatarPhoto = styled.img`
  margin-right: 12px;
`;

export const MovieTitle = styled.p`
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.color.text};
  line-height: 18px;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 269px;
`;

export const MovieDetails = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.color.text};
  line-height: 18px;
`;
