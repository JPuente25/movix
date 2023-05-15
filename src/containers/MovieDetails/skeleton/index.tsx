import {
   DataInfo,
   MovieInfo,
   Overview,
   PosterImg,
   Rating,
   RatingTrailerBox,
   Tagline,
   Title,
   Trailer,
   WrappedContainer
} from './index.styled';

const SkeletonMovieDetails = () => {
   return (
      <WrappedContainer className="movieDetails" data-testid="skeletonMovieDetails">
         <PosterImg className="Picture" />

         <div className="description">
            <MovieInfo>
               <Title className="title" />
               <Tagline className="tagline" />
            </MovieInfo>

            <RatingTrailerBox className="ratingTrailer">
               <Rating className="rating" />
               <Trailer className="trailer" />
            </RatingTrailerBox>

            <Overview className="overview">
               <p className="title"></p>
               <p className="text"></p>
               <p className="text"></p>
               <p className="text"></p>
            </Overview>

            <DataInfo className="dataInfo">
               <div className="numerics">
                  <span></span>
               </div>

               <div className="director">
                  <span></span>
               </div>

               <div className="writer">
                  <span></span>
               </div>
            </DataInfo>

         </div>
      </WrappedContainer>
   );
};

export { SkeletonMovieDetails };

