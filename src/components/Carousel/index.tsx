import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ContentWrapper, MovieContainer } from './index.styled';
import { MovieCard } from '../MovieCard';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
   getPopularMovies,
   getTopRatedMovies,
   getTrendingMovies,
} from '../../features/movix/HomeSlice';
import { getRecommendations, getUpcomingMovies } from '../../features/movix/DetailsSlice';
import { useParams } from 'react-router-dom';
import { SkeletonMoviesCarousel } from './skeleton';
import { DataProps } from '../../types';
import { NoContent } from '../NoContent';
import { SomethingWrong } from '../SomethingWrong';

interface Props {
   dataType: string;
   reference: React.MutableRefObject<HTMLDivElement | null>;
   sectionRef: React.MutableRefObject<HTMLOptionElement | null>;
   selectedOption: string | null;
}

const Carousel = ({ dataType, reference, sectionRef, selectedOption }: Props) => {
   const params = useParams();
   const dispatch = useAppDispatch();
   let data: DataProps = {} as DataProps;
   let loading: boolean = true;
   let error: boolean = false;
   const movieWidth = sectionRef.current?.clientWidth || 1160;

   const {
      trendingMovies,
      popularMovies,
      topRatedMovies,
      loadingTrending,
      loadingPopular,
      loadingTopRated,
   } = useAppSelector((state) => state.home);

   const { upcomingMovies, loadingUpcomingMovies, recommendations, loadingRecommendations, errorUpcomingMovies, errorRecommendations } =
      useAppSelector((state) => state.details);

   switch (dataType) {
      case 'trending':
         data = trendingMovies;
         loading = loadingTrending;
         break;

      case 'popular':
         data = popularMovies;
         loading = loadingPopular;
         break;

      case 'top-rated':
         data = topRatedMovies;
         loading = loadingTopRated;
         break;

      case 'upcoming-movies':
         data = upcomingMovies;
         loading = loadingUpcomingMovies;
         error = errorUpcomingMovies;
         break;

      case 'recommendations':
         data = recommendations;
         loading = loadingRecommendations;
         error = errorRecommendations;
         break;
   }

   useEffect(() => {
      switch (dataType) {
         case 'trending':
            dispatch(getTrendingMovies(`/trending/all/${selectedOption}`));
            break;

         case 'popular':
            dispatch(getPopularMovies(`/${selectedOption}/popular`));
            break;

         case 'top-rated':
            dispatch(getTopRatedMovies(`/${selectedOption}/top_rated`));
            break;

         case 'upcoming-movies':
            dispatch(getUpcomingMovies());
            break;

         case 'recommendations':
            dispatch(getRecommendations(`${params.mediaType}/${params.id}/recommendations`));
            break;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [selectedOption, params]);

   if (!loading && error) {
      return <SomethingWrong />
   }

   return (
      <ContentWrapper>

         {(!loading && data.results.length !== 0 && !error )
            ? <MovieContainer ref={reference}>
               {data.results.map((movie) => (
                  <MovieCard
                     key={uuidv4()}
                     movie={movie}
                     movieWidth={movieWidth}
                     selectedMedia={selectedOption}
                  />))}
             </MovieContainer>

            : (loading && !error) 
               ? <SkeletonMoviesCarousel />

               : (!loading && data.results.length === 0 && !error) 
                  ? <NoContent />
                  : true}

      </ContentWrapper>
   );
};

export { Carousel };
