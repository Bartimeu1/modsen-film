import React from 'react';

import {
  StyledSkeletonLoader,
  SkeletonPoster,
  SkeletonInfo,
  SkeletonAvatarPhoto,
  SkeletonText,
  SkeletonTitle,
  SkeletonDetails,
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
