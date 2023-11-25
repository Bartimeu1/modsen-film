import styled from 'styled-components';

export const StyledCategoryBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -5px;
`;

export const CategoryButton = styled.button`
  color: ${(props) => props.theme.color.text};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  background: ${(props) => props.theme.color.categoryBg};
  font-size: ${(props) => props.theme.fontSize.sm};
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 7px 25px;
  margin: 0 5px;
  max-width: 106px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 11px ${(props) => props.theme.color.boxShadow};
    transition: 0.3s;
  }
`;
