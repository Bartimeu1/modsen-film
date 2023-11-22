import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  position: relative;
  &::after {
    background: ${(props) => props.theme.color.border};
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.p`
  font-size: ${(props) => props.theme.fontSize.lg};
  color: ${(props) => props.theme.color.text};
  font-weight: 700;
  margin-left: 6px;
`;

export const ToggleButton = styled.input`
  border: 2px solid ${(props) => props.theme.color.button};
  background: ${(props) => props.theme.color.background};
  appearance: none;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
  margin: 0;
  vertical-align: top;  
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  &::after {
    background: ${(props) => props.theme.color.background};
    border: 2px solid ${(props) => props.theme.color.button};
    content: '';
    display: inline-block;
    position: absolute;
    left: -1px;
    top: -1px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    transform: translateX(0);
    transition: 0.3s;
  }
  &:checked::after {
    transform: translateX(calc(100% - 4px));
    background-color: #fff;
    transition: 0.3s;
  }
  &:checked {
    background: ${(props) => props.theme.color.button};
    transition: 0.3s;
  }
`;
