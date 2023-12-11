import styled from 'styled-components';

const StyledSearchHint = styled.div`
  border: 1px solid ${(props) => props.theme.color.border};
  background: ${(props) => props.theme.color.background};
  padding: 10px 15px;
  position: absolute;
  left: 0;
  top: 50px;
  width: 505px;
  z-index: 10;
  border-radius: 10px;

  @media (max-width: 650px) {
    width: calc(100% - 57px);
  }
`;

const HintItem = styled.div`
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.color.text};
  font-weight: bold;
  padding-bottom: 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  cursor: pointer;
  &:last-child {
    padding-bottom: 0;
  }
  &:hover {
    color: ${(props) => props.theme.color.button};
  }
`;

export { StyledSearchHint, HintItem };
