import React from 'react';

import {
  SkeletonAvatarPhoto,
  SkeletonDetails,
  SkeletonInfo,
  SkeletonPoster,
  SkeletonText,
  SkeletonTitle,
  StyledSkeletonLoader,
} from './styled';

function MovieSkeletonLoader() {
  return (
    <StyledSkeletonLoader>
      <SkeletonPoster />
      <SkeletonInfo>
        <SkeletonAvatarPhoto />
        <SkeletonText>
          <SkeletonTitle />
          <SkeletonDetails />
        </SkeletonText>
      </SkeletonInfo>
    </StyledSkeletonLoader>
  );
}

export default MovieSkeletonLoader;
