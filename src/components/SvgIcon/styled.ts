import styled from "styled-components";

export const StyledSvgIcon = styled.svg`
  & g, path {
    fill: ${(props) => props.theme.color.social}
  }
`;