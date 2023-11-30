import styled from 'styled-components';

export const StyledMovieModal = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  transition: 0.5s all;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background: ${(props) => props.theme.color.background};
  box-shadow:
    ${(props) => props.theme.color.boxShadow} 0px 10px 36px 0px,
    ${(props) => props.theme.color.boxShadow} 0px 0px 0px 1px;
  height: 420px;
  padding: 20px;
  width: 700px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 5;
  position: relative;
`;

export const MovieTitle = styled.h4`
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.color.xxxl};
  font-weight: 500;
  margin-bottom: 30px;
`;

export const ModalVideo = styled.iframe`
  border: none;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  right: 30px;
  top: 20px;
  width: 30px;
  height: 30px;
  border: none;
  &::before,
  &::after {
    position: absolute;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    bottom: 50%;
    background: ${(props) => props.theme.color.button};
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;
