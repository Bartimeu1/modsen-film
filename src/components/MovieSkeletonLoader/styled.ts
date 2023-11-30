import styled from 'styled-components';

export const StyledSkeletonLoader = styled.div`
  box-shadow: 0 0 20px ${(props) => props.theme.color.boxShadow};
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  margin-bottom: 42px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s;
`;

export const SkeletonPoster = styled.div`
  background: ${(props) => props.theme.color.skeletonBg};
  width: 332px;
  height: 186px;
  margin-bottom: 12px;
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
`;

export const SkeletonDetails = styled.div`
  background: ${(props) => props.theme.color.skeletonBg};
  width: 150px;
  height: 15px;
`;
