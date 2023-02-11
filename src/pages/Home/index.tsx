import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';

import { HeroBanner } from '../../containers/HeroBanner';
import { MoviesCarousel } from '../../containers/MoviesCarousel';
import { unsetErrors } from '../../features/movix/DetailsSlice';

import { HomeContainer } from './index.styled';

const Home = () => {
   const dispatch = useAppDispatch();
   const location = useLocation();
   const [trendingOption, setTrendingOption] = useState<number>(0);
   const [popularOption, setPopularOption] = useState<number>(0);
   const [topRatedOption, setTopRatedOption] = useState<number>(0);

   useEffect(() => {
      dispatch(unsetErrors());
   }, [location]);


   return (
      <HomeContainer>
         <HeroBanner />

            <MoviesCarousel
               title="Trendings"
               options={[
                  { label: 'Day', value: 'day' },
                  { label: 'Week', value: 'week' }]}
               selectedTab={trendingOption}
               setSelectedTab={setTrendingOption}
               dataType="trending"
               className="moviesCarousel"
            />

            <MoviesCarousel
               title="What's Popular"
               options={[
                  { label: 'Movies', value: 'movie' },
                  { label: 'TV Shows', value: 'tv' }]}
               selectedTab={popularOption}
               setSelectedTab={setPopularOption}
               dataType="popular"
               className="moviesCarousel"
            />
            <MoviesCarousel
               title="Top Rated"
               options={[
                  { label: 'Movies', value: 'movie' },
                  { label: 'TV Shows', value: 'tv' }]}
               selectedTab={topRatedOption}
               setSelectedTab={setTopRatedOption}
               dataType="top-rated"
               className="moviesCarousel"
            />

      </HomeContainer>
   );
};

export { Home };
