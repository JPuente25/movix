import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getRecommendations, getUpcomingMovies } from '../../features/movix/DetailsSlice';
import {
   getPopularMovies,
   getTopRatedMovies,
   getTrendingMovies
} from '../../features/movix/HomeSlice';
import { DataProps } from '../../types';
import { MovieCard } from '../MovieCard';
import { NoContent } from '../NoContent';
import { SomethingWrong } from '../SomethingWrong';
import { checkProps } from './functions/checkProps';
import { ContentWrapper, MovieContainer } from './index.styled';
import { SkeletonMoviesCarousel } from './skeleton';

interface Props {
   dataType: string;
   reference: React.RefObject<HTMLDivElement>;
   sectionWidth: number | undefined;
   selectedOption: string | null;
}

const Carousel = ({ dataType, reference, sectionWidth, selectedOption }: Props) => {
   const params = useParams();
   const dispatch = useAppDispatch();
   const movieWidth = sectionWidth || 1160;
   let data: DataProps = {} as DataProps;
   let status = checkProps(selectedOption, dataType);

   const {
      trendingMovies,
      popularMovies,
      topRatedMovies,
      loadingTrending,
      loadingPopular,
      loadingTopRated,
      errorTrending,
      errorPopular,
      errorTopRated,
   } = useAppSelector((state) => state.home);

   const {
      upcomingMovies,
      loadingUpcomingMovies,
      recommendations,
      loadingRecommendations,
      errorUpcomingMovies,
      errorRecommendations,
   } = useAppSelector((state) => state.details);

   if (!status.error) {
      switch (dataType) {
         case 'trending':
            data = trendingMovies;
            status = {
               loading: loadingTrending,
               error: errorTrending,
            };
            break;

         case 'popular':
            data = popularMovies;
            status = {
               loading: loadingPopular,
               error: errorPopular,
            };
            break;

         case 'top-rated':
            data = topRatedMovies;
            status = {
               loading: loadingTopRated,
               error: errorTopRated,
            };
            break;

         case 'upcoming-movies':
            data = upcomingMovies;
            status = {
               loading: loadingUpcomingMovies,
               error: errorUpcomingMovies,
            };
            break;

         case 'recommendations':
            data = recommendations;
            status = {
               loading: loadingRecommendations,
               error: errorRecommendations,
            };
            break;
      }
   }

   useEffect(() => {
      if (!status.error) {
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
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [selectedOption, params]);

   if (status.error) {
      return <SomethingWrong />;
   } else if (!status.loading && !status.error && data.results?.length === 0) {
      return <NoContent />;
   } else if (status.loading && !status.error) {
      return <SkeletonMoviesCarousel />;
   } else {
      
      return (
         <ContentWrapper>
            {(!status.loading && !status.error && data.results.length !== 0) && (
               <MovieContainer
               className='movie-container'
                  ref={reference}
                  role="contentinfo">
                  {data.results.map((movie) => (
                     <MovieCard
                        key={uuidv4()}
                        movie={movie}
                        movieWidth={movieWidth}
                        selectedMedia={selectedOption}
                     />
                  ))}
               </MovieContainer>
            )}
         </ContentWrapper>
      );
   }

};

export { Carousel };

