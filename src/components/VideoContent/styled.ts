import styled from 'styled-components';

export const StyledVideoContent = styled.main`
  flex: 1 1 auto;
  display: flex;
  padding-bottom: 54px;
  flex-direction: column;
`;

export const ShowMoreButton = styled.button`
  font-size: ${(props) => props.theme.fontSize.xxl};
  padding: 14px 35px;
  margin: 67px auto 0 auto;
  color: #fff;
  width: 193px;
  border: 1px solid #ff8a00;
  background: #ff8a00;
  transition: 0.3s;
  border-radius: 10px;
  &:hover {
    background: inherit;
    color: #ff8a00;
    transition: 0.3s;
  }
`;
