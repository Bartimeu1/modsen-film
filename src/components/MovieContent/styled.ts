import styled from 'styled-components';

export const StyledMovieContent = styled.main`
  flex: 1 1 auto;
  display: flex;
  margin-bottom: 54px;
  flex-direction: column;
  position: relative;

  @media (max-width: 400px) {
    margin-bottom: 60px;
  }
`;

export const ShowMoreButton = styled.button`
  font-size: ${(props) => props.theme.fontSize.xxl};
  padding: 14px 35px;
  margin: 67px auto 0 auto;
  color: #fff;
  width: 193px;
  font-weight: 700;
  border: 1px solid #ff8a00;
  background: #ff8a00;
  transition: 0.3s;
  border-radius: 10px;
  &:hover {
    background: inherit;
    color: #ff8a00;
    transition: 0.3s;
  }

  @media (max-width: 500px) {
    font-size: ${(props) => props.theme.fontSize.md};
    width: 97%;
    margin-top: 40px;
    padding: 8px 0;
  }
`;

export const MovieContentError = styled.div`
  font-size: ${(props) => props.theme.fontSize.xxl};
  color: ${(props) => props.theme.color.text};
  text-align: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: 500;
  transform: translate(-50%, -50%);

  @media (max-width: 530px) {
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;
