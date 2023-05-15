import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { HeroBanner } from '../../containers/HeroBanner';
import { MoviesCarousel } from '../../containers/MoviesCarousel';
import { unsetErrors } from '../../features/movix/DetailsSlice';
import { HomeContainer } from './index.styled';

const Home = () => {
   const dispatch = useAppDispatch();
   const location = useLocation();

   useEffect(() => {
      dispatch(unsetErrors());
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [location]);

   return (
      <HomeContainer>
         <HeroBanner />

            <MoviesCarousel
               title="Trendings"
               options={[
                  { label: 'Day', value: 'day' },
                  { label: 'Week', value: 'week' }]}
               dataType="trending"
               className="moviesCarousel"
            />

            <MoviesCarousel
               title="What's Popular"
               options={[
                  { label: 'Movies', value: 'movie' },
                  { label: 'TV Shows', value: 'tv' }]}
               dataType="popular"
               className="moviesCarousel"
            />
            <MoviesCarousel
               title="Top Rated"
               options={[
                  { label: 'Movies', value: 'movie' },
                  { label: 'TV Shows', value: 'tv' }]}
               dataType="top-rated"
               className="moviesCarousel"
            />
            
      </HomeContainer>
   );
};

export { Home };

