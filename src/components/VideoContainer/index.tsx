import React from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { VideoPlayer } from '../VideoPlayer';
import { Container } from './index.styled';

interface Props {
   toggleVideoView: () => void;
   videoUrl: string | undefined;
}

const VideoContainer = ({ toggleVideoView, videoUrl }: Props) => {
   return (
      <Container className="videoContainer" role='group'>
         <IoMdCloseCircleOutline role="figure" onClick={toggleVideoView} />
         <VideoPlayer src={videoUrl} />
      </Container>
   );
};

export { VideoContainer };
