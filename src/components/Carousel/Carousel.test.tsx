import '@testing-library/jest-dom/extend-expect';
import { HashRouter } from 'react-router-dom';
import { render, prettyDOM, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { Carousel } from '.';
import { store } from '../../app/store';
import { getTrendingMovies } from '../../features/movix/HomeSlice';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { CreditsProps, DataProps, Genres, MovieProps, VideoProps } from '../../types';

describe('<Carousel />', () => {
   const mockStore = configureStore([thunk]);

   test('Renders correctly and loading: trending/day', () => {
      const ref = React.createRef<HTMLDivElement>();
      const store = mockStore({
         home: {
            genres: {} as Genres,
            loadingGenres: false,
            errorGenres: false,
            trendingMovies: {} as DataProps,
            popularMovies: {} as DataProps,
            topRatedMovies: {} as DataProps,
            loadingTrending: true,
            loadingPopular: true,
            loadingTopRated: true,
            errorTrending: false,
            errorPopular: false,
            errorTopRated: false,
         },
         details: {
            upcomingMovies: {} as DataProps,
            recommendations: {} as DataProps,
            loadingUpcomingMovies: true,
            loadingRecommendations: true,
            errorUpcomingMovies: null,
            errorRecommendations: null,
         },
      });
      const view = render(
         <Provider store={store}>
            <HashRouter>
               <Carousel
                  dataType="trending"
                  sectionWidth={768}
                  selectedOption="day"
                  reference={ref}
               />
            </HashRouter>
         </Provider>
      );
      expect(view.container).toBeInTheDocument();

      const skeleton = screen.getAllByRole('group');
      expect(skeleton).toHaveLength(15);
   });

   ////////////////////////////////////////////////////////////////////////////////////////
   //       ___                                                               ___        //
   //      ||||          [             Rendering Errors           ]          ||||        //
   //      ||||          [                                        ]          ||||        //
   //   ___||||___       [                                        ]       ___||||__      //
   //   \||||||||/       [                                        ]       \||||||||/     //
   //    \|||||/         [                                        ]        \|||||/       //
   //     \||/           [                                        ]         \||/         //
   //      v             [                                        ]          v           //
   //                                                                                    //
   ////////////////////////////////////////////////////////////////////////////////////////

   test('Renders error: trending/day', () => {
      const ref = React.createRef<HTMLDivElement>();
      const store = mockStore({
         home: {
            genres: {} as Genres,
            loadingGenres: false,
            errorGenres: false,
            trendingMovies: {} as DataProps,
            popularMovies: {} as DataProps,
            topRatedMovies: {} as DataProps,
            loadingTrending: false,
            loadingPopular: true,
            loadingTopRated: true,
            errorTrending: true,
            errorPopular: false,
            errorTopRated: false,
         },
         details: {
            upcomingMovies: {} as DataProps,
            recommendations: {} as DataProps,
            loadingUpcomingMovies: true,
            loadingRecommendations: true,
            errorUpcomingMovies: null,
            errorRecommendations: null,
         },
      });

      render(
         <Provider store={store}>
            <HashRouter>
               <Carousel
                  dataType="trending"
                  sectionWidth={768}
                  selectedOption="day"
                  reference={ref}
               />
            </HashRouter>
         </Provider>
      );

      const error = screen.getByText('Something is going wrong...');
      expect(error).toBeInTheDocument();
   });

   test('Renders correctly but no results: trending/day', () => {
      const ref = React.createRef<HTMLDivElement>();
      const store = mockStore({
         home: {
            genres: {} as Genres,
            loadingGenres: false,
            errorGenres: false,
            trendingMovies: {
               page: 1,
               total_pages: 1,
               total_results: 0,
               results: []
            } as DataProps,
            popularMovies: {} as DataProps,
            topRatedMovies: {} as DataProps,
            loadingTrending: false,
            loadingPopular: true,
            loadingTopRated: true,
            errorTrending: false,
            errorPopular: false,
            errorTopRated: false,
         },
         details: {
            upcomingMovies: {} as DataProps,
            recommendations: {} as DataProps,
            loadingUpcomingMovies: true,
            loadingRecommendations: true,
            errorUpcomingMovies: null,
            errorRecommendations: null,
         },
      });

      render(
         <Provider store={store}>
            <HashRouter>
               <Carousel
                  dataType="trending"
                  sectionWidth={768}
                  selectedOption="day"
                  reference={ref}
               />
            </HashRouter>
         </Provider>
      );

      const alert = screen.getByText('There is not content to show!');
      expect(alert).toBeInTheDocument();
   });

   test('Renders error: Pass non-accepted props (trending/movie)', () => {
      const ref = React.createRef<HTMLDivElement>();
      const store = mockStore({
         home: {
            genres: {} as Genres,
            loadingGenres: false,
            errorGenres: false,
            trendingMovies: {} as DataProps,
            popularMovies: {} as DataProps,
            topRatedMovies: {} as DataProps,
            loadingTrending: true,
            loadingPopular: true,
            loadingTopRated: true,
            errorTrending: false,
            errorPopular: false,
            errorTopRated: false,
         },
         details: {
            upcomingMovies: {} as DataProps,
            recommendations: {} as DataProps,
            loadingUpcomingMovies: true,
            loadingRecommendations: true,
            errorUpcomingMovies: null,
            errorRecommendations: null,
         },
      });

      render(
         <Provider store={store}>
            <HashRouter>
               <Carousel
                  dataType="trending"
                  sectionWidth={768}
                  selectedOption="movie"
                  reference={ref}
               />
            </HashRouter>
         </Provider>
      );

      const error = screen.getByText('Something is going wrong...');
      expect(error).toBeInTheDocument();
   });

   test('Renders error: Pass non-accepted props (popular/day)', () => {
      const ref = React.createRef<HTMLDivElement>();
      const store = mockStore({
         home: {
            genres: {} as Genres,
            loadingGenres: false,
            errorGenres: false,
            trendingMovies: {} as DataProps,
            popularMovies: {} as DataProps,
            topRatedMovies: {} as DataProps,
            loadingTrending: true,
            loadingPopular: true,
            loadingTopRated: true,
            errorTrending: false,
            errorPopular: false,
            errorTopRated: false,
         },
         details: {
            upcomingMovies: {} as DataProps,
            recommendations: {} as DataProps,
            loadingUpcomingMovies: true,
            loadingRecommendations: true,
            errorUpcomingMovies: null,
            errorRecommendations: null,
         },
      });

      render(
         <Provider store={store}>
            <HashRouter>
               <Carousel
                  dataType="popular"
                  sectionWidth={768}
                  selectedOption="day"
                  reference={ref}
               />
            </HashRouter>
         </Provider>
      );

      const error = screen.getByText('Something is going wrong...');
      expect(error).toBeInTheDocument();
   });

   test('Renders error: Pass non-accepted props (recommendations/day)', () => {
      const ref = React.createRef<HTMLDivElement>();
      const store = mockStore({
         home: {
            genres: {} as Genres,
            loadingGenres: false,
            errorGenres: false,
            trendingMovies: {} as DataProps,
            popularMovies: {} as DataProps,
            topRatedMovies: {} as DataProps,
            loadingTrending: true,
            loadingPopular: true,
            loadingTopRated: true,
            errorTrending: false,
            errorPopular: false,
            errorTopRated: false,
         },
         details: {
            upcomingMovies: {} as DataProps,
            recommendations: {} as DataProps,
            loadingUpcomingMovies: true,
            loadingRecommendations: true,
            errorUpcomingMovies: null,
            errorRecommendations: null,
         },
      });

      render(
         <Provider store={store}>
            <HashRouter>
               <Carousel
                  dataType="recommendations"
                  sectionWidth={768}
                  selectedOption="day"
                  reference={ref}
               />
            </HashRouter>
         </Provider>
      );

      const error = screen.getByText('Something is going wrong...');
      expect(error).toBeInTheDocument();
   });

   ////////////////////////////////////////////////////////////////////////////////////////
   //       ___                                                               ___        //
   //      ||||          [Rendering Data: Every Datatype and Mediatype]      ||||        //
   //      ||||          [                                        ]          ||||        //
   //   ___||||___       [                                        ]       ___||||__      //
   //   \||||||||/       [                                        ]       \||||||||/     //
   //    \|||||/         [                                        ]        \|||||/       //
   //     \||/           [                                        ]         \||/         //
   //      v             [                                        ]          v           //
   //                                                                                    //
   ////////////////////////////////////////////////////////////////////////////////////////

   test('Renders data: trending/day', () => {
      const ref = React.createRef<HTMLDivElement>();
      const store = mockStore({
         home: {
            genres: {} as Genres,
            loadingGenres: false,
            errorGenres: false,
            trendingMovies: {
               results: [
                  {
                     adult: false,
                     backdrop_path: '/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg',
                     id: 640146,
                     title: 'Ant-Man and the Wasp: Quantumania',
                     original_language: 'en',
                     original_title: 'Ant-Man and the Wasp: Quantumania',
                     overview: 'Super-Hero partners Scott Lang and Hope van Dyne.',
                     poster_path: '/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg',
                     media_type: 'movie',
                     genre_ids: [12, 878, 35],
                     popularity: 964.218,
                     release_date: '2023-02-10',
                     video: false,
                     vote_average: 6.627,
                     vote_count: 177,
                  },
               ],
               total_pages: 1,
               total_results: 1,
               page: 1,
            },
            popularMovies: {} as DataProps,
            topRatedMovies: {} as DataProps,
            loadingTrending: false,
            loadingPopular: true,
            loadingTopRated: true,
            errorTrending: false,
            errorPopular: false,
            errorTopRated: false,
         },
         details: {
            upcomingMovies: {} as DataProps,
            recommendations: {} as DataProps,
            loadingUpcomingMovies: true,
            loadingRecommendations: true,
            errorUpcomingMovies: null,
            errorRecommendations: null,
         },
      });

      render(
         <Provider store={store}>
            <HashRouter>
               <Carousel
                  dataType="trending"
                  sectionWidth={undefined}
                  selectedOption="day"
                  reference={ref}
               />
            </HashRouter>
         </Provider>
      );

      const dataSection = screen.getByRole('contentinfo');
      expect(dataSection).toBeInTheDocument();
   });

   test('Renders data: trending/week', () => {
      const ref = React.createRef<HTMLDivElement>();
      const store = mockStore({
         home: {
            genres: {} as Genres,
            loadingGenres: false,
            errorGenres: false,
            trendingMovies: {
               results: [
                  {
                     adult: false,
                     backdrop_path: '/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg',
                     id: 640146,
                     title: 'Ant-Man and the Wasp: Quantumania',
                     original_language: 'en',
                     original_title: 'Ant-Man and the Wasp: Quantumania',
                     overview: 'Super-Hero partners Scott Lang and Hope van Dyne.',
                     poster_path: '/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg',
                     media_type: 'movie',
                     genre_ids: [12, 878, 35],
                     popularity: 964.218,
                     release_date: '2023-02-10',
                     video: false,
                     vote_average: 6.627,
                     vote_count: 177,
                  },
               ],
               total_pages: 1,
               total_results: 1,
               page: 1,
            },
            popularMovies: {} as DataProps,
            topRatedMovies: {} as DataProps,
            loadingTrending: false,
            loadingPopular: true,
            loadingTopRated: true,
            errorTrending: false,
            errorPopular: false,
            errorTopRated: false,
         },
         details: {
            upcomingMovies: {} as DataProps,
            recommendations: {} as DataProps,
            loadingUpcomingMovies: true,
            loadingRecommendations: true,
            errorUpcomingMovies: null,
            errorRecommendations: null,
         },
      });

      render(
         <Provider store={store}>
            <HashRouter>
               <Carousel
                  dataType="trending"
                  sectionWidth={768}
                  selectedOption="week"
                  reference={ref}
               />
            </HashRouter>
         </Provider>
      );

      const dataSection = screen.getByRole('contentinfo');
      expect(dataSection).toBeInTheDocument();
   });

   test('Renders data: popular/movie', () => {
      const ref = React.createRef<HTMLDivElement>();
      const store = mockStore({
         home: {
            genres: {} as Genres,
            loadingGenres: false,
            errorGenres: false,
            trendingMovies: {} as DataProps,
            popularMovies: {
               results: [
                  {
                     adult: false,
                     backdrop_path: '/cL0cdccOMzM508ODsWPfHVMMAzo.jpg',
                     genre_ids: [28],
                     id: 267805,
                     original_language: 'en',
                     original_title: 'There Are No Saints',
                     overview:
                        "A man is imprisoned for a crime he didn't commit. When his wife is murdered and his son kidnapped and taken to Mexico, he devises an elaborate and dangerous plan to rescue his son and avenge the murder.",
                     popularity: 1535.185,
                     poster_path: '/fcOTYArjKuAgufwHoTvx8w9UKCv.jpg',
                     release_date: '2022-05-27',
                     title: 'There Are No Saints',
                     video: false,
                     vote_average: 5.3,
                     vote_count: 33,
                  },
               ],
               total_pages: 1,
               total_results: 1,
               page: 1,
            } as DataProps,
            topRatedMovies: {} as DataProps,
            loadingTrending: true,
            loadingPopular: false,
            loadingTopRated: true,
            errorTrending: false,
            errorPopular: false,
            errorTopRated: false,
         },
         details: {
            upcomingMovies: {} as DataProps,
            recommendations: {} as DataProps,
            loadingUpcomingMovies: true,
            loadingRecommendations: true,
            errorUpcomingMovies: null,
            errorRecommendations: null,
         },
      });

      render(
         <Provider store={store}>
            <HashRouter>
               <Carousel
                  dataType="popular"
                  sectionWidth={768}
                  selectedOption="movie"
                  reference={ref}
               />
            </HashRouter>
         </Provider>
      );

      const dataSection = screen.getByRole('contentinfo');
      expect(dataSection).toBeInTheDocument();
   });

   test('Renders data: popular/tv', () => {
      const ref = React.createRef<HTMLDivElement>();
      const store = mockStore({
         home: {
            genres: {} as Genres,
            loadingGenres: false,
            errorGenres: false,
            trendingMovies: {} as DataProps,
            popularMovies: {
               results: [
                  {
                     adult: false,
                     backdrop_path: '/cL0cdccOMzM508ODsWPfHVMMAzo.jpg',
                     genre_ids: [28],
                     id: 267805,
                     original_language: 'en',
                     original_title: 'There Are No Saints',
                     overview:
                        "A man is imprisoned for a crime he didn't commit. When his wife is murdered and his son kidnapped and taken to Mexico, he devises an elaborate and dangerous plan to rescue his son and avenge the murder.",
                     popularity: 1535.185,
                     poster_path: '/fcOTYArjKuAgufwHoTvx8w9UKCv.jpg',
                     release_date: '2022-05-27',
                     title: 'There Are No Saints',
                     video: false,
                     vote_average: 5.3,
                     vote_count: 33,
                  },
               ],
               total_pages: 1,
               total_results: 1,
               page: 1,
            } as DataProps,
            topRatedMovies: {} as DataProps,
            loadingTrending: true,
            loadingPopular: false,
            loadingTopRated: true,
            errorTrending: false,
            errorPopular: false,
            errorTopRated: false,
         },
         details: {
            upcomingMovies: {} as DataProps,
            recommendations: {} as DataProps,
            loadingUpcomingMovies: true,
            loadingRecommendations: true,
            errorUpcomingMovies: null,
            errorRecommendations: null,
         },
      });

      render(
         <Provider store={store}>
            <HashRouter>
               <Carousel
                  dataType="popular"
                  sectionWidth={768}
                  selectedOption="tv"
                  reference={ref}
               />
            </HashRouter>
         </Provider>
      );

      const dataSection = screen.getByRole('contentinfo');
      expect(dataSection).toBeInTheDocument();
   });

   test('Renders data: top-rated/movie', () => {
      const ref = React.createRef<HTMLDivElement>();
      const store = mockStore({
         home: {
            genres: {} as Genres,
            loadingGenres: false,
            errorGenres: false,
            trendingMovies: {} as DataProps,
            popularMovies: {} as DataProps,
            topRatedMovies: {
               results: [
                  {
                     adult: false,
                     backdrop_path: '/cG5QZHyIRJXqo53YA41gbNMlpIM.jpg',
                     id: 717980,
                     title: 'Sharper',
                     original_language: 'en',
                     original_title: 'Sharper',
                     overview:
                        'A small, wealthy family in New York City gets progressively torn apart by secrets, lies, and the theft that orchestrates all of it.',
                     poster_path: '/tq8x5F17q95T1j0up5rpzXFAylN.jpg',
                     media_type: 'movie',
                     genre_ids: [53, 80, 18],
                     popularity: 79.67,
                     release_date: '2023-02-10',
                     video: false,
                     vote_average: 7.198,
                     vote_count: 53,
                  },
               ],
               total_pages: 1,
               total_results: 1,
               page: 1,
            } as DataProps,
            loadingTrending: true,
            loadingPopular: true,
            loadingTopRated: false,
            errorTrending: false,
            errorPopular: false,
            errorTopRated: false,
         },
         details: {
            upcomingMovies: {} as DataProps,
            recommendations: {} as DataProps,
            loadingUpcomingMovies: true,
            loadingRecommendations: true,
            errorUpcomingMovies: null,
            errorRecommendations: null,
         },
      });

      render(
         <Provider store={store}>
            <HashRouter>
               <Carousel
                  dataType="top-rated"
                  sectionWidth={768}
                  selectedOption="movie"
                  reference={ref}
               />
            </HashRouter>
         </Provider>
      );

      const dataSection = screen.getByRole('contentinfo');
      expect(dataSection).toBeInTheDocument();
   });

   test('Renders data: top-rated/tv', () => {
      const ref = React.createRef<HTMLDivElement>();
      const store = mockStore({
         home: {
            genres: {} as Genres,
            loadingGenres: false,
            errorGenres: false,
            trendingMovies: {} as DataProps,
            popularMovies: {} as DataProps,
            topRatedMovies: {
               results: [
                  {
                     adult: false,
                     backdrop_path: '/cG5QZHyIRJXqo53YA41gbNMlpIM.jpg',
                     id: 717980,
                     title: 'Sharper',
                     original_language: 'en',
                     original_title: 'Sharper',
                     overview:
                        'A small, wealthy family in New York City gets progressively torn apart by secrets, lies, and the theft that orchestrates all of it.',
                     poster_path: '/tq8x5F17q95T1j0up5rpzXFAylN.jpg',
                     media_type: 'tv',
                     genre_ids: [53, 80, 18],
                     popularity: 79.67,
                     release_date: '2023-02-10',
                     video: false,
                     vote_average: 7.198,
                     vote_count: 53,
                  },
               ],
               total_pages: 1,
               total_results: 1,
               page: 1,
            } as DataProps,
            loadingTrending: true,
            loadingPopular: true,
            loadingTopRated: false,
            errorTrending: false,
            errorPopular: false,
            errorTopRated: false,
         },
         details: {
            upcomingMovies: {} as DataProps,
            recommendations: {} as DataProps,
            loadingUpcomingMovies: true,
            loadingRecommendations: true,
            errorUpcomingMovies: null,
            errorRecommendations: null,
         },
      });

      render(
         <Provider store={store}>
            <HashRouter>
               <Carousel
                  dataType="top-rated"
                  sectionWidth={768}
                  selectedOption="tv"
                  reference={ref}
               />
            </HashRouter>
         </Provider>
      );

      const dataSection = screen.getByRole('contentinfo');
      expect(dataSection).toBeInTheDocument();
   });


   test('Renders data: upcoming-movies/movie', () => {
      const ref = React.createRef<HTMLDivElement>();
      const store = mockStore({
         home: {
            genres: {} as Genres,
            loadingGenres: false,
            errorGenres: false,
            trendingMovies: {} as DataProps,
            popularMovies: {} as DataProps,
            topRatedMovies: {} as DataProps,
            loadingTrending: true,
            loadingPopular: true,
            loadingTopRated: true,
            errorTrending: false,
            errorPopular: false,
            errorTopRated: false,
         },
         details: {
            upcomingMovies: {
               results: [
                  {
                     adult: false,
                     backdrop_path: '/b1Y8SUb12gPHCSSSNlbX4nB3IKy.jpg',
                     genre_ids: [
                       16,
                       12,
                       35,
                       10751,
                       14
                     ],
                     id: 315162,
                     original_language: 'en',
                     original_title: 'Puss in Boots: The Last Wish',
                     overview: 'Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.',
                     popularity: 3911.777,
                     poster_path: '/kuf6dutpsT0vSVehic3EZIqkOBt.jpg',
                     release_date: '2022-12-07',
                     title: 'Puss in Boots: The Last Wish',
                     video: false,
                     vote_average: 8.5,
                     vote_count: 3840
                   },
               ],
               total_pages: 1,
               total_results: 1,
               page: 1,
            } as DataProps,
            recommendations: {} as DataProps,
            loadingUpcomingMovies: false,
            loadingRecommendations: true,
            errorUpcomingMovies: null,
            errorRecommendations: null,
         },
      });

      render(
         <Provider store={store}>
            <HashRouter>
               <Carousel
                  dataType="upcoming-movies"
                  sectionWidth={768}
                  selectedOption="movie"
                  reference={ref}
               />
            </HashRouter>
         </Provider>
      );

      const dataSection = screen.getByRole('contentinfo');
      expect(dataSection).toBeInTheDocument();
   });

   test('Renders data: recommendations', () => {
      const ref = React.createRef<HTMLDivElement>();
      const store = mockStore({
         home: {
            genres: {} as Genres,
            loadingGenres: false,
            errorGenres: false,
            trendingMovies: {} as DataProps,
            popularMovies: {} as DataProps,
            topRatedMovies: {} as DataProps,
            loadingTrending: true,
            loadingPopular: true,
            loadingTopRated: true,
            errorTrending: false,
            errorPopular: false,
            errorTopRated: false,
         },
         details: {
            upcomingMovies: {} as DataProps,
            recommendations: {
               results: [
                  {
                     adult: false,
                     backdrop_path: '/dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg',
                     id: 536554,
                     title: 'M3GAN',
                     original_language: 'en',
                     original_title: 'M3GAN',
                     overview: 'A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll\'s programming works too well, she becomes overprotective of her new friend with terrifying results.',
                     poster_path: '/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg',
                     media_type: 'movie',
                     genre_ids: [
                       878,
                       27,
                       35
                     ],
                     popularity: 2088.921,
                     release_date: '2022-12-28',
                     video: false,
                     vote_average: 7.544,
                     vote_count: 1677
                   },
               ],
               total_pages: 1,
               total_results: 1,
               page: 1,
            } as DataProps,
            loadingUpcomingMovies: true,
            loadingRecommendations: false,
            errorUpcomingMovies: null,
            errorRecommendations: null,
         },
      });

      render(
         <Provider store={store}>
            <HashRouter>
               <Carousel
                  dataType="recommendations"
                  sectionWidth={768}
                  selectedOption={null}
                  reference={ref}
               />
            </HashRouter>
         </Provider>
      );

      const dataSection = screen.getByRole('contentinfo');
      expect(dataSection).toBeInTheDocument();
   });
});
