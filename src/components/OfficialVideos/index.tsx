import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { VideoProps } from '../../types';
import { NoContent } from '../NoContent';
import { Img } from '../Img';
import { PlayIcon } from '../PlayButton';
import { VideoContainer } from '../VideoContainer';
import { CardContainer, ContentWrapper, VideoCard, VideoImage, VideoPlay } from './index.styled';

interface Props {
   data: VideoProps[];
}

interface OfficialVideosStates {
   videoView: boolean;
   videoUrl: string | undefined;
}

const OfficialVideos = ({ data }: Props) => {
   const [videoView, setVideoView] = useState<OfficialVideosStates['videoView']>(false);
   const [videoUrl, setVideoUrl] = useState<OfficialVideosStates['videoUrl']>(undefined);

   const toggleVideoView = () => {
      setVideoView((prev) => !prev);
      if (videoView) {
         setVideoUrl(undefined);
      }
   };

   const handlePlay = (video: VideoProps) => {
      setVideoView(true);
      const videoLink = video.key ? `https://www.youtube.com/embed/${video.key}` : undefined;
      setVideoUrl(videoLink);
   };

   return (
      <ContentWrapper>
         {videoUrl && videoView && (
            <VideoContainer
               videoUrl={videoUrl}
               toggleVideoView={toggleVideoView}
            />
         )}
         <h1 className="title">Official Videos</h1>

         <CardContainer className="cardContainer">
            {data.length !== 0 ? (
               data.map((video) => (
                  <VideoCard
                     key={uuidv4()}
                     className="videoCard">
                     <VideoPlay className="videoPlay">
                        <VideoImage className="videoImage">
                           <Img
                              src={
                                 video.key
                                    ? `https://i.ytimg.com/vi/${video.key}/maxresdefault.jpg`
                                    : null
                              }
                           />
                           <div
                              className="playicon"
                              onClick={() => {
                                 handlePlay(video);
                              }}>
                              <PlayIcon />
                           </div>
                        </VideoImage>
                     </VideoPlay>

                     <span className="videoTitle">{video.name}</span>
                  </VideoCard>
               ))
            ) : (
               <NoContent />
            )}
         </CardContainer>
      </ContentWrapper>
   );
};

export { OfficialVideos };
