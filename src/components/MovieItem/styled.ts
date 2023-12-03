import styled from 'styled-components';

interface MoviePosterProps {
  url: string;
}

export const StyledMovieItem = styled.div`
  width: 24%;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  margin-bottom: 42px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s;
  box-shadow: 0 0 20px ${(props) => props.theme.color.boxShadow};
  &:hover {
    transition: all 0.3s;
    box-shadow: 10px 15px 25px 0 ${(props) => props.theme.color.boxShadow};
  }

  @media (max-width: 1200px) {
    width: 32.5%;
  }

  @media (max-width: 930px) {
    width: 49%;
  }

  @media (max-width: 650px) {
    width: 90%;
    padding: 10px;
    margin-bottom: 30px;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const MoviePoster = styled.div<MoviePosterProps>`
  height: 186px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 12px;

  @media (max-width: 400px) {
    height: 130px;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const MovieText = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;

  @media (max-width: 400px) {
    padding-top: 3px;
  }
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
  max-width: 220px;

  @media (max-width: 1200px) {
    max-width: 230px;
  }

  @media (max-width: 930px) {
    max-width: 240px;
  }

  @media (max-width: 650px) {
    font-size: ${(props) => props.theme.fontSize.sm};
  }

  @media (max-width: 380px) {
    max-width: 190px;
  }
`;

export const MovieDetails = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.color.text};
  line-height: 18px;
`;
