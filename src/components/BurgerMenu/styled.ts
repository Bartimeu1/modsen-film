import styled from 'styled-components';

interface IBurgerMenu {
  isactive: string;
}

export const StyledBurgerMenu = styled.button<IBurgerMenu>`
  z-index: 6;
  border: none;
  position: relative;
  display: none;
  width: 17px;
  height: 11.5px;
  transition: 0.3s;
  &::before,
  &::after {
    background: ${(props) => props.theme.color.text};
    position: absolute;
    left: 0;
    content: '';
    width: 100%;
    height: 1.5px;
    border-radius: 2px;
    transition: 0.3s;
  }
  &::before {
    top: ${(props) => (props.isactive === 'true' ? '5px' : 0)};
    transform: ${(props) =>
      props.isactive === 'true' ? 'rotate(45deg)' : 'none'};
  }
  &:after {
    bottom: ${(props) => (props.isactive === 'true' ? '5px' : 0)};
    transform: ${(props) =>
      props.isactive === 'true' ? 'rotate(-45deg)' : 'none'};
  }

  & span {
    display: ${(props) => (props.isactive === 'true' ? 'none' : 'block')};
  }

  @media (max-width: 830px) {
    display: block;
  }
`;

export const BurgerRow = styled.span`
  background: ${(props) => props.theme.color.text};
  position: absolute;
  width: 100%;
  height: 1.5px;
  top: 5px;
  border-radius: 2px;
  left: 0;
`;
