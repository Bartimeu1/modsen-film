import React from 'react';

import { StyledVideoContent } from './styled';
import CategoryBar from '../CategoryBar/CategoryBar';
import VideoList from '../VideoList/VideoList';

function VideoContent() {
  return (
    <StyledVideoContent>
      <CategoryBar />
      <VideoList />
    </StyledVideoContent>
  );
}

export default VideoContent;
