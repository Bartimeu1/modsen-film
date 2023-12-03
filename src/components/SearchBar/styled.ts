import { ReactComponent as SearchIcon } from '@assets/images/search.svg';
import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
  @media (max-width: 650px) {
    height: 33px;
    justify-content: center;
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  width: 505px;
  height: 100%;
  padding-left: 15px;
  border: 1px solid ${(props) => props.theme.color.border};
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.color.text};
  background: ${(props) => props.theme.color.background};
  &::placeholder {
    opacity: 51%;
    font-size: ${(props) => props.theme.fontSize.sm};
    color: ${(props) => props.theme.color.text};
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const SearchButton = styled.button`
  width: 57px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.color.border};
  background: ${(props) => props.theme.color.background};
  & svg {
    transition: 0.3s;
  }
  &:hover {
    & svg {
      transform: translate(0, -3px);
      transition: 0.3s;
    }
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  & path {
    fill: ${(props) => props.theme.color.text};
  }
`;
