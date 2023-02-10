import React, { useState } from 'react';

import { HeroBanner } from '../../containers/HeroBanner';
import { MoviesCarousel } from '../../containers/MoviesCarousel';

import { HomeContainer } from './index.styled';

const Home = () => {
   const [trendingOption, setTrendingOption] = useState<number>(0);
   const [popularOption, setPopularOption] = useState<number>(0);
   const [topRatedOption, setTopRatedOption] = useState<number>(0);

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
