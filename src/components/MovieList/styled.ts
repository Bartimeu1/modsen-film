import styled from "styled-components";

export const StyledMovieList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: -30px;

  @media (max-width: 650px) {
    justify-content: center;
  }
`;
