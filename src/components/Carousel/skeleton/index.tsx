import { ContentWrapper } from '../../ContentWrapper';
import {
   SkeletonContainer,
   SkeletonDate,
   SkeletonMovie,
   SkeletonPoster,
   SkeletonTextBlock,
   SkeletonTitle,
} from './index.styled';

const SkeletonMoviesCarousel = () => {
   return (
      <ContentWrapper>
         <SkeletonContainer>
            {new Array(15).fill(1).map((movie, id) => (
               <SkeletonMovie key={id}>
                  <SkeletonPoster />

                  <SkeletonTextBlock>
                     <SkeletonTitle />
                     <SkeletonDate />
                  </SkeletonTextBlock>
               </SkeletonMovie>
            ))}
         </SkeletonContainer>
      </ContentWrapper>
   );
};

export { SkeletonMoviesCarousel };
