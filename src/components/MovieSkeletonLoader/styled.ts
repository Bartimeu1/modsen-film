import styled from 'styled-components';

export const StyledSkeletonLoader = styled.div`
  box-shadow: 0 0 20px ${(props) => props.theme.color.boxShadow};
  width: 24%;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  margin-bottom: 42px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s;

  @media (max-width: 1200px) {
    width: 32.5%;
  }

  @media (max-width: 930px) {
    width: 49%;
  }

  @media (max-width: 650px) {
    width: 90%;
    padding: 10px;
    margin-bottom: 30px;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const SkeletonPoster = styled.div`
  background: ${(props) => props.theme.color.skeletonBg};
  height: 186px;
  margin-bottom: 12px;

  @media (max-width: 400px) {
    height: 130px;
  }
`;

export const SkeletonInfo = styled.div`
  display: flex;
  align-items: flex-start;
  background: inherit;
`;

export const SkeletonText = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  background: inherit;

  @media (max-width: 400px) {
    padding-top: 3px;
  }
`;

export const SkeletonAvatarPhoto = styled.div`
  background: ${(props) => props.theme.color.skeletonBg};
  margin-right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const SkeletonTitle = styled.div`
  background: ${(props) => props.theme.color.skeletonBg};
  margin-bottom: 10px;
  width: 269px;
  height: 15px;

  @media (max-width: 1200px) {
    max-width: 230px;
  }

  @media (max-width: 930px) {
    max-width: 240px;
  }

  @media (max-width: 380px) {
    max-width: 190px;
  }
`;

export const SkeletonDetails = styled.div`
  background: ${(props) => props.theme.color.skeletonBg};
  width: 150px;
  height: 15px;
`;
