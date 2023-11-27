import React from 'react';

import { getYearByDate } from '../../utils/helpers';
import { POSTER_URL } from '../../constants/url';
import {
  StyledVideoItem,
  VideoPoster,
  VideoInfo,
  AvatarPhoto,
  VideoText,
  VideoTitle,
  VideoDetails,
} from './styled';

import avatarImg from '../../assets/images/avatar.png';
import noPosterImg from '../../assets/images/noPoster.png';

interface IVideoItemProps {
  title: string;
  poster: string;
  year: Date;
}
function VideoItem(props: IVideoItemProps) {
  const { title, poster, year } = props;

  return (
    <StyledVideoItem>
      <VideoPoster url={poster ? `${POSTER_URL}${poster}` : noPosterImg} />
      <VideoInfo>
        <AvatarPhoto src={avatarImg} />
        <VideoText>
          <VideoTitle>{title}</VideoTitle>
          <VideoDetails>{getYearByDate(year)}</VideoDetails>
        </VideoText>
      </VideoInfo>
    </StyledVideoItem>
  );
}

export default VideoItem;
