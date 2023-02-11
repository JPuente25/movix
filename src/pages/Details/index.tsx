import React, { useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { CastCarousel } from '../../components/CastCarousel';
import { SkeletonCastCarousel } from '../../components/CastCarousel/skeleton';
import { OfficialVideos } from '../../components/OfficialVideos';
import { SkeletonOfficialVideos } from '../../components/OfficialVideos/skeleton';
import { SomethingWrong } from '../../components/SomethingWrong';
import { MovieDetails } from '../../containers/MovieDetails';
import { SkeletonMovieDetails } from '../../containers/MovieDetails/skeleton';
import { MoviesCarousel } from '../../containers/MoviesCarousel';
import { getCredits, getDetails, getVideos } from '../../features/movix/DetailsSlice';
import { NotFound } from '../NotFound';
import { MediaNotFound } from '../NotFound/MediaNotFound';
import { WrappedContainer } from './index.styled';

const Details = () => {
   const navigate = useNavigate();
   const params = useParams();
   const dispatch = useAppDispatch();
   const { movie, credits, videos, loadingMovie, loadingCredits, loadingVideos, errorMovie, errorCredits, errorVideos } = useAppSelector(
      (state) => state.details
   );
   const mediaType = params.mediaType!;
   const id = params.id;

   useEffect(() => {
      dispatch(getDetails(`${mediaType}/${id}`));
      dispatch(getCredits(`${mediaType}/${id}/credits`));
      dispatch(getVideos(`${mediaType}/${id}/videos`));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [params]);

   if (mediaType !== 'movie' && mediaType !== 'tv') {
      return <NotFound />
   }

   if (errorMovie && errorCredits && errorVideos) {
      return <MediaNotFound />
   }

   return (
      <WrappedContainer>

         {(!loadingMovie && !loadingCredits && (!errorMovie || !errorCredits)) 
            ? <MovieDetails
               data={movie}
               credits={credits}/>
            : (errorMovie || errorCredits) 
               ? <SomethingWrong />
               : <SkeletonMovieDetails />}


         {(!loadingCredits && !errorCredits) 
            ? <CastCarousel data={credits} /> 
            : (errorCredits)
               ? <SomethingWrong />
               : <SkeletonCastCarousel />}


         {(!loadingVideos && !errorVideos) 
            ? <OfficialVideos data={videos} /> 
            : (errorVideos) 
               ? <SomethingWrong />
               : <SkeletonOfficialVideos />}

         <MoviesCarousel
            title="Upcoming Movies"
            dataType="upcoming-movies"
            fixedMedia={'movie'}
         />

         <MoviesCarousel
            title="Recommendations"
            dataType="recommendations"
         />
      </WrappedContainer>
   );
};

export { Details };
