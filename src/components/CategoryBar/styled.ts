import styled from 'styled-components';

export const StyledCategoryBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 -5px 28px 0;
  padding-bottom: 12px;
  position: relative;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 14px;
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    border: 6px solid ${(props) => props.theme.color.background};
    background: ${(props) => props.theme.color.border};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.button};
    border: 4px solid ${(props) => props.theme.color.background};
    border-radius: 10px;
  }
`;

export const CategoryButton = styled.button`
  color: ${(props) => props.theme.color.text};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  background: ${(props) => props.theme.color.categoryBg};
  font-size: ${(props) => props.theme.fontSize.sm};
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 7px 25px;
  margin: 0 5px;
  max-width: 115px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 11px ${(props) => props.theme.color.boxShadow};
    transition: 0.3s;
  }
`;
