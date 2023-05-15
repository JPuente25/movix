import { CardContainer, ContentWrapper, VideoCard, VideoPlay } from './index.styled';

const SkeletonOfficialVideos = () => {
   return (
      <ContentWrapper data-testid="skeletonOfficialVideos">
         <div className="title"></div>

         <CardContainer className="cardContainer">

            {new Array(8).fill(1).map((video, i) => (
               <VideoCard key={i} className="videoCard" role='group'>
                  <VideoPlay className="videoPlay"></VideoPlay>
                  <span className="videoTitle"></span>
               </VideoCard>
            ))}

         </CardContainer>
      </ContentWrapper>
   );
};

export { SkeletonOfficialVideos };
