import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Home } from '.';

describe('<Home />', () => {
   const mockStore = configureStore([thunk]);
   const store = mockStore({
         home: {
            popularMovies: {
               page: 1,
               results: [
                  {
                     adult: false,
                     backdrop_path: '/hegMHNsxYGlGgVgaGz9FqxPqImr.jpg',
                     genre_ids: [27, 9648, 53],
                     id: 631842,
                     original_language: 'en',
                     original_title: 'Knock at the Cabin',
                     overview:
                        'While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.',
                     popularity: 3287.614,
                     poster_path: '/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg',
                     release_date: '2023-02-01',
                     title: 'Knock at the Cabin',
                     video: false,
                     vote_average: 6.5,
                     vote_count: 608,
                  },
               ],
               total_pages: 37324,
               total_results: 746476,
            },
            trendingMovies: {
               page: 1,
               results: [
                  {
                     adult: false,
                     backdrop_path: '/v2LilmCylr3bL9TCZSj6syjowZh.jpg',
                     id: 937278,
                     title: 'A Man Called Otto',
                     original_language: 'en',
                     original_title: 'A Man Called Otto',
                     overview:
                        'When a lively young family moves in next door, grumpy widower Otto Anderson meets his match in a quick-witted, pregnant woman named Marisol, leading to an unlikely friendship that turns his world upside down.',
                     poster_path: '/130H1gap9lFfiTF9iDrqNIkFvC9.jpg',
                     media_type: 'movie',
                     genre_ids: [35, 18],
                     popularity: 205.243,
                     release_date: '2022-12-28',
                     video: false,
                     vote_average: 7.5,
                     vote_count: 285,
                  }
               ],
               total_pages: 1000,
               total_results: 20000,
            },
            genres: {
               movie: [
                  {
                     id: 28,
                     name: 'Action',
                  },
                  {
                     id: 12,
                     name: 'Adventure',
                  },
                  {
                     id: 16,
                     name: 'Animation',
                  },
                  {
                     id: 35,
                     name: 'Comedy',
                  },
                  {
                     id: 80,
                     name: 'Crime',
                  },
                  {
                     id: 99,
                     name: 'Documentary',
                  },
                  {
                     id: 18,
                     name: 'Drama',
                  },
                  {
                     id: 10751,
                     name: 'Family',
                  },
                  {
                     id: 14,
                     name: 'Fantasy',
                  },
                  {
                     id: 36,
                     name: 'History',
                  },
                  {
                     id: 27,
                     name: 'Horror',
                  },
                  {
                     id: 10402,
                     name: 'Music',
                  },
                  {
                     id: 9648,
                     name: 'Mystery',
                  },
                  {
                     id: 10749,
                     name: 'Romance',
                  },
                  {
                     id: 878,
                     name: 'Science Fiction',
                  },
                  {
                     id: 10770,
                     name: 'TV Movie',
                  },
                  {
                     id: 53,
                     name: 'Thriller',
                  },
                  {
                     id: 10752,
                     name: 'War',
                  },
                  {
                     id: 37,
                     name: 'Western',
                  },
               ],
               tv: [
                  {
                     id: 10759,
                     name: 'Action & Adventure',
                  },
                  {
                     id: 16,
                     name: 'Animation',
                  },
                  {
                     id: 35,
                     name: 'Comedy',
                  },
                  {
                     id: 80,
                     name: 'Crime',
                  },
                  {
                     id: 99,
                     name: 'Documentary',
                  },
                  {
                     id: 18,
                     name: 'Drama',
                  },
                  {
                     id: 10751,
                     name: 'Family',
                  },
                  {
                     id: 10762,
                     name: 'Kids',
                  },
                  {
                     id: 9648,
                     name: 'Mystery',
                  },
                  {
                     id: 10763,
                     name: 'News',
                  },
                  {
                     id: 10764,
                     name: 'Reality',
                  },
                  {
                     id: 10765,
                     name: 'Sci-Fi & Fantasy',
                  },
                  {
                     id: 10766,
                     name: 'Soap',
                  },
                  {
                     id: 10767,
                     name: 'Talk',
                  },
                  {
                     id: 10768,
                     name: 'War & Politics',
                  },
                  {
                     id: 37,
                     name: 'Western',
                  },
               ],
            },
            topRatedMovies: {
               page: 1,
               results: [
                  {
                     adult: false,
                     backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
                     genre_ids: [18, 80],
                     id: 238,
                     original_language: 'en',
                     original_title: 'The Godfather',
                     overview:
                        'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
                     popularity: 109.528,
                     poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
                     release_date: '1972-03-14',
                     title: 'The Godfather',
                     video: false,
                     vote_average: 8.7,
                     vote_count: 17534,
                  }
               ],
               total_pages: 543,
               total_results: 10855,
            },
            loadingGenres: false,
            loadingPopular: false,
            loadingTrending: false,
            loadingTopRated: false,
            errorPopular: false,
            errorTrending: false,
            errorGenres: false,
            errorTopRated: false,
         },
      details: {
         movie: {},
         credits: {},
         videos: [],
         upcomingMovies: {},
         recommendations: {},
         loadingMovie: true,
         loadingCredits: true,
         loadingVideos: true,
         loadingUpcomingMovies: true,
         loadingRecommendations: true,
         errorMovie: false,
         errorCredits: false,
         errorVideos: false,
         errorUpcomingMovies: false,
         errorRecommendations: false
       }
   });
   
   test('Renders correctly', () => {
      const { container } = render(
         <Provider store={store}>
            <HashRouter>
               <Routes>
                  <Route path="/" element={<Home />} />
               </Routes>
            </HashRouter>
         </Provider>
      );

      expect(container).toBeInTheDocument();
   });

   test('Renders Data and Information', () => {
      render(
         <Provider store={store}>
            <HashRouter>
               <Routes>
                  <Route path="/" element={<Home />} />
               </Routes>
            </HashRouter>
         </Provider>
      );

      const trendingTitle = screen.getByText(/Trendings/);
      expect(trendingTitle).toBeInTheDocument(); 
      const popularTitle = screen.getByText(/What's Popular/);
      expect(popularTitle).toBeInTheDocument(); 
      const topRatedTitle = screen.getByText(/Top Rated/);
      expect(topRatedTitle).toBeInTheDocument(); 
   });
});
