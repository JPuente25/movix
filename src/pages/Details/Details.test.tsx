import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Details } from '.';

describe('<Details />', () => {
   const mockStore = configureStore([thunk]);
   const store = mockStore({
      home: {
        popularMovies: {
          page: 1,
          results: [
            {
              adult: false,
              backdrop_path: '/hegMHNsxYGlGgVgaGz9FqxPqImr.jpg',
              genre_ids: [
                27,
                9648,
                53
              ],
              id: 631842,
              original_language: 'en',
              original_title: 'Knock at the Cabin',
              overview: 'While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.',
              popularity: 3287.614,
              poster_path: '/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg',
              release_date: '2023-02-01',
              title: 'Knock at the Cabin',
              video: false,
              vote_average: 6.5,
              vote_count: 608
            }
          ],
          total_pages: 37324,
          total_results: 746476
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
              overview: 'When a lively young family moves in next door, grumpy widower Otto Anderson meets his match in a quick-witted, pregnant woman named Marisol, leading to an unlikely friendship that turns his world upside down.',
              poster_path: '/130H1gap9lFfiTF9iDrqNIkFvC9.jpg',
              media_type: 'movie',
              genre_ids: [
                35,
                18
              ],
              popularity: 205.243,
              release_date: '2022-12-28',
              video: false,
              vote_average: 7.5,
              vote_count: 285
            }
          ],
          total_pages: 1000,
          total_results: 20000
        },
        genres: {},
        topRatedMovies: {
          page: 1,
          results: [
            {
              adult: false,
              backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
              genre_ids: [
                18,
                80
              ],
              id: 238,
              original_language: 'en',
              original_title: 'The Godfather',
              overview: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
              popularity: 109.528,
              poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
              release_date: '1972-03-14',
              title: 'The Godfather',
              video: false,
              vote_average: 8.7,
              vote_count: 17534
            }
          ],
          total_pages: 543,
          total_results: 10855
        },
        loadingGenres: true,
        loadingPopular: true,
        loadingTrending: true,
        loadingTopRated: true,
        errorPopular: false,
        errorTrending: false,
        errorGenres: false,
        errorTopRated: false
      },
      details: {
         movie: {
            adult: false,
            backdrop_path: '/6Lw54zxm6BAEKJeGlabyzzR5Juu.jpg',
            created_by: [
            {
               id: 15277,
               credit_id: '5bb6f5c39251410dc601d77f',
               name: 'Jon Favreau',
               gender: 2,
               profile_path: '/8MtRRnEHaBSw8Ztdl8saXiw1egP.jpg'
            }
            ],
            genres: [
            {
               id: 10765,
               name: 'Sci-Fi & Fantasy'
            },
            {
               id: 10759,
               name: 'Action & Adventure'
            },
            {
               id: 18,
               name: 'Drama'
            },
            {
               id: 37,
               name: 'Western'
            },
            {
               id: 10768,
               name: 'War & Politics'
            }
            ],
            homepage: 'https://www.disneyplus.com/series/the-mandalorian/3jLIGMDYINqD',
            id: 82856,
            name: 'The Mandalorian',
            original_language: 'en',
            original_name: 'The Mandalorian',
            overview: 'After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.',
            popularity: 373.026,
            poster_path: '/x4b89IkzxfGnA26coS5nRpkEzPo.jpg',
            status: 'Returning Series',
            tagline: 'Bounty hunting is a complicated profession.',
            vote_average: 8.474,
            vote_count: 8385
         },
         credits: {
            cast: [
            {
               adult: false,
               gender: 2,
               id: 1253360,
               known_for_department: 'Acting',
               name: 'Pedro Pascal',
               original_name: 'Pedro Pascal',
               popularity: 241.593,
               profile_path: '/dBOrm29cr7NUrjiDQMTtrTyDpfy.jpg',
               character: 'Din Djarin / The Mandalorian',
               credit_id: '5beb247f92514143e6058194',
               order: 0
            }
            ],
            crew: [
            {
               adult: false,
               gender: 2,
               id: 51866,
               known_for_department: 'Directing',
               name: 'Rick Famuyiwa',
               original_name: 'Rick Famuyiwa',
               popularity: 3.056,
               profile_path: '/zvpQOPiD5RLfjKBJyNgHYNocy7X.jpg',
               credit_id: '63cf6520b6cff100e91f8c69',
               department: 'Production',
               job: 'Executive Producer'
            }
            ],
            id: 82856
         },
         videos: [
            {
            iso_639_1: 'en',
            iso_3166_1: 'US',
            name: 'Special Look',
            key: '2RVnrBLOBcI',
            site: 'YouTube',
            size: 1080,
            type: 'Trailer',
            official: true,
            published_at: '2019-11-12T02:44:26.000Z',
            id: '62c709cfa0b6b50726db9939'
            }
         ],
         upcomingMovies: {
            page: 1,
            results: [
            {
               adult: false,
               backdrop_path: '/hegMHNsxYGlGgVgaGz9FqxPqImr.jpg',
               genre_ids: [
                  27,
                  9648,
                  53
               ],
               id: 631842,
               original_language: 'en',
               original_title: 'Knock at the Cabin',
               overview: 'While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.',
               popularity: 3287.614,
               poster_path: '/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg',
               release_date: '2023-02-01',
               title: 'Knock at the Cabin',
               video: false,
               vote_average: 6.5,
               vote_count: 608
            }
            ],
            total_pages: 27,
            total_results: 539
         },
         recommendations: {
            page: 1,
            results: [
            {
               adult: false,
               backdrop_path: '/1i1N0AVRb54H6ZFPDTwbo9MLxSF.jpg',
               id: 85271,
               name: 'WandaVision',
               original_language: 'en',
               original_name: 'WandaVision',
               overview: 'Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems.',
               poster_path: '/frobUz2X5Pc8OiVZU8Oo5K3NKMM.jpg',
               media_type: 'tv',
               genre_ids: [
                  10765,
                  9648,
                  18
               ],
               popularity: 72.466,
               first_air_date: '2021-01-15',
               vote_average: 8.289,
               vote_count: 10883,
               origin_country: [
                  'US'
               ]
            }
            ],
            total_pages: 2,
            total_results: 40
         },
         loadingMovie: false,
         loadingCredits: false,
         loadingVideos: false,
         loadingUpcomingMovies: false,
         loadingRecommendations: false,
         errorMovie: null,
         errorCredits: null,
         errorVideos: null,
         errorUpcomingMovies: null,
         errorRecommendations: null
      }
   });

   beforeEach(() => {
   window.location.hash = "#/details/movie/123";
   })
   
   test('Renders correctly', () => {
      const { container } = render(
         <Provider store={store}>
            <HashRouter>
               <Routes>
                  <Route path="/details/:mediaType/:id" element={<Details />} />
               </Routes>
            </HashRouter>
         </Provider>
      );

      expect(container).toBeInTheDocument();
      console.log(prettyDOM(container));
   });

   test('Renders Data and Information', () => {
      window.location.hash = "#/details/tv/123";
      render(
         <Provider store={store}>
            <HashRouter>
               <Routes>
                  <Route path="/details/:mediaType/:id" element={<Details />} />
               </Routes>
            </HashRouter>
         </Provider>
      );

      const title = screen.getByText("The Mandalorian (2023)");
      expect(title).toBeInTheDocument(); 
      const castName = screen.getByText(/Pedro Pascal/);
      expect(castName).toBeInTheDocument(); 
      const videoTitle = screen.getByText(/Special Look/);
      expect(videoTitle).toBeInTheDocument(); 
      const upcomingFirstMovie = screen.getByText(/Knock at the/);
      expect(upcomingFirstMovie).toBeInTheDocument();
      const recommendationFirstMovie = screen.getByText(/Knock at the/);
      expect(recommendationFirstMovie).toBeInTheDocument();
   });
   
   test('Errors: wrong path', () => {
      window.location.hash = "#/details/wrongpath/123";
      render(
         <Provider store={store}>
            <HashRouter>
               <Routes>
                  <Route path="/details/:mediaType/:id" element={<Details />} />
               </Routes>
            </HashRouter>
         </Provider>
      );

      const notFound = screen.getByText('404');
      expect(notFound).toBeInTheDocument();
   });

   test('Errors: Triple error (Not valid ID)', () => {
      const store2 = mockStore({
         home: {
           popularMovies: {
             page: 1,
             results: [
               {
                 adult: false,
                 backdrop_path: '/hegMHNsxYGlGgVgaGz9FqxPqImr.jpg',
                 genre_ids: [
                   27,
                   9648,
                   53
                 ],
                 id: 631842,
                 original_language: 'en',
                 original_title: 'Knock at the Cabin',
                 overview: 'While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.',
                 popularity: 3287.614,
                 poster_path: '/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg',
                 release_date: '2023-02-01',
                 title: 'Knock at the Cabin',
                 video: false,
                 vote_average: 6.5,
                 vote_count: 608
               }
             ],
             total_pages: 37324,
             total_results: 746476
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
                 overview: 'When a lively young family moves in next door, grumpy widower Otto Anderson meets his match in a quick-witted, pregnant woman named Marisol, leading to an unlikely friendship that turns his world upside down.',
                 poster_path: '/130H1gap9lFfiTF9iDrqNIkFvC9.jpg',
                 media_type: 'movie',
                 genre_ids: [
                   35,
                   18
                 ],
                 popularity: 205.243,
                 release_date: '2022-12-28',
                 video: false,
                 vote_average: 7.5,
                 vote_count: 285
               }
             ],
             total_pages: 1000,
             total_results: 20000
           },
           genres: {},
           topRatedMovies: {
             page: 1,
             results: [
               {
                 adult: false,
                 backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
                 genre_ids: [
                   18,
                   80
                 ],
                 id: 238,
                 original_language: 'en',
                 original_title: 'The Godfather',
                 overview: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
                 popularity: 109.528,
                 poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
                 release_date: '1972-03-14',
                 title: 'The Godfather',
                 video: false,
                 vote_average: 8.7,
                 vote_count: 17534
               }
             ],
             total_pages: 543,
             total_results: 10855
           },
           loadingGenres: true,
           loadingPopular: true,
           loadingTrending: true,
           loadingTopRated: true,
           errorPopular: false,
           errorTrending: false,
           errorGenres: false,
           errorTopRated: false
         },
         details: {
            movie: {},
            credits: {},
            videos: [],
            upcomingMovies: {
               page: 1,
               results: [
               {
                  adult: false,
                  backdrop_path: '/hegMHNsxYGlGgVgaGz9FqxPqImr.jpg',
                  genre_ids: [
                     27,
                     9648,
                     53
                  ],
                  id: 631842,
                  original_language: 'en',
                  original_title: 'Knock at the Cabin',
                  overview: 'While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.',
                  popularity: 3287.614,
                  poster_path: '/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg',
                  release_date: '2023-02-01',
                  title: 'Knock at the Cabin',
                  video: false,
                  vote_average: 6.5,
                  vote_count: 608
               }
               ],
               total_pages: 27,
               total_results: 539
            },
            recommendations: {
               page: 1,
               results: [],
               total_pages: 27,
               total_results: 539
            },
            loadingMovie: false,
            loadingCredits: false,
            loadingVideos: false,
            loadingUpcomingMovies: false,
            loadingRecommendations: false,
            errorMovie: true,
            errorCredits: true,
            errorVideos: true,
            errorUpcomingMovies: false,
            errorRecommendations: false
         }
       });
   
      render(
         <Provider store={store2}>
            <HashRouter>
               <Routes>
                  <Route path="/details/:mediaType/:id" element={<Details />} />
               </Routes>
            </HashRouter>
         </Provider>
      );

      const errorPage = screen.getByText('404');
      expect(errorPage).toBeInTheDocument();
   });

   test('Errors: movie and credits Error and loading Videos', () => {
      const store2 = mockStore({
         home: {
           popularMovies: {
             page: 1,
             results: [
               {
                 adult: false,
                 backdrop_path: '/hegMHNsxYGlGgVgaGz9FqxPqImr.jpg',
                 genre_ids: [
                   27,
                   9648,
                   53
                 ],
                 id: 631842,
                 original_language: 'en',
                 original_title: 'Knock at the Cabin',
                 overview: 'While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.',
                 popularity: 3287.614,
                 poster_path: '/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg',
                 release_date: '2023-02-01',
                 title: 'Knock at the Cabin',
                 video: false,
                 vote_average: 6.5,
                 vote_count: 608
               }
             ],
             total_pages: 37324,
             total_results: 746476
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
                 overview: 'When a lively young family moves in next door, grumpy widower Otto Anderson meets his match in a quick-witted, pregnant woman named Marisol, leading to an unlikely friendship that turns his world upside down.',
                 poster_path: '/130H1gap9lFfiTF9iDrqNIkFvC9.jpg',
                 media_type: 'movie',
                 genre_ids: [
                   35,
                   18
                 ],
                 popularity: 205.243,
                 release_date: '2022-12-28',
                 video: false,
                 vote_average: 7.5,
                 vote_count: 285
               }
             ],
             total_pages: 1000,
             total_results: 20000
           },
           genres: {},
           topRatedMovies: {
             page: 1,
             results: [
               {
                 adult: false,
                 backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
                 genre_ids: [
                   18,
                   80
                 ],
                 id: 238,
                 original_language: 'en',
                 original_title: 'The Godfather',
                 overview: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
                 popularity: 109.528,
                 poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
                 release_date: '1972-03-14',
                 title: 'The Godfather',
                 video: false,
                 vote_average: 8.7,
                 vote_count: 17534
               }
             ],
             total_pages: 543,
             total_results: 10855
           },
           loadingGenres: true,
           loadingPopular: true,
           loadingTrending: true,
           loadingTopRated: true,
           errorPopular: false,
           errorTrending: false,
           errorGenres: false,
           errorTopRated: false
         },
         details: {
            movie: {},
            credits: {},
            videos: [],
            upcomingMovies: {
               page: 1,
               results: [
               {
                  adult: false,
                  backdrop_path: '/hegMHNsxYGlGgVgaGz9FqxPqImr.jpg',
                  genre_ids: [
                     27,
                     9648,
                     53
                  ],
                  id: 631842,
                  original_language: 'en',
                  original_title: 'Knock at the Cabin',
                  overview: 'While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.',
                  popularity: 3287.614,
                  poster_path: '/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg',
                  release_date: '2023-02-01',
                  title: 'Knock at the Cabin',
                  video: false,
                  vote_average: 6.5,
                  vote_count: 608
               }
               ],
               total_pages: 27,
               total_results: 539
            },
            recommendations: {
               page: 1,
               results: [],
               total_pages: 27,
               total_results: 539
            },
            loadingMovie: false,
            loadingCredits: false,
            loadingVideos: true,
            loadingUpcomingMovies: false,
            loadingRecommendations: false,
            errorMovie: true,
            errorCredits: true,
            errorVideos: false,
            errorUpcomingMovies: false,
            errorRecommendations: false
         }
       });
   
      render(
         <Provider store={store2}>
            <HashRouter>
               <Routes>
                  <Route path="/details/:mediaType/:id" element={<Details />} />
               </Routes>
            </HashRouter>
         </Provider>
      );

      const errorMsg = screen.getAllByText('Something is going wrong...');
      expect(errorMsg).toHaveLength(2);
      const skeletonVideos = screen.getByTestId('skeletonOfficialVideos');
      expect(skeletonVideos).toBeInTheDocument();
   });

   test('Errors: videos Error and movie/credits loading', () => {
      const store2 = mockStore({
         home: {
           popularMovies: {
             page: 1,
             results: [
               {
                 adult: false,
                 backdrop_path: '/hegMHNsxYGlGgVgaGz9FqxPqImr.jpg',
                 genre_ids: [
                   27,
                   9648,
                   53
                 ],
                 id: 631842,
                 original_language: 'en',
                 original_title: 'Knock at the Cabin',
                 overview: 'While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.',
                 popularity: 3287.614,
                 poster_path: '/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg',
                 release_date: '2023-02-01',
                 title: 'Knock at the Cabin',
                 video: false,
                 vote_average: 6.5,
                 vote_count: 608
               }
             ],
             total_pages: 37324,
             total_results: 746476
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
                 overview: 'When a lively young family moves in next door, grumpy widower Otto Anderson meets his match in a quick-witted, pregnant woman named Marisol, leading to an unlikely friendship that turns his world upside down.',
                 poster_path: '/130H1gap9lFfiTF9iDrqNIkFvC9.jpg',
                 media_type: 'movie',
                 genre_ids: [
                   35,
                   18
                 ],
                 popularity: 205.243,
                 release_date: '2022-12-28',
                 video: false,
                 vote_average: 7.5,
                 vote_count: 285
               }
             ],
             total_pages: 1000,
             total_results: 20000
           },
           genres: {},
           topRatedMovies: {
             page: 1,
             results: [
               {
                 adult: false,
                 backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
                 genre_ids: [
                   18,
                   80
                 ],
                 id: 238,
                 original_language: 'en',
                 original_title: 'The Godfather',
                 overview: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
                 popularity: 109.528,
                 poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
                 release_date: '1972-03-14',
                 title: 'The Godfather',
                 video: false,
                 vote_average: 8.7,
                 vote_count: 17534
               }
             ],
             total_pages: 543,
             total_results: 10855
           },
           loadingGenres: true,
           loadingPopular: true,
           loadingTrending: true,
           loadingTopRated: true,
           errorPopular: false,
           errorTrending: false,
           errorGenres: false,
           errorTopRated: false
         },
         details: {
            movie: {},
            credits: {},
            videos: [],
            upcomingMovies: {
               page: 1,
               results: [
               {
                  adult: false,
                  backdrop_path: '/hegMHNsxYGlGgVgaGz9FqxPqImr.jpg',
                  genre_ids: [
                     27,
                     9648,
                     53
                  ],
                  id: 631842,
                  original_language: 'en',
                  original_title: 'Knock at the Cabin',
                  overview: 'While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.',
                  popularity: 3287.614,
                  poster_path: '/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg',
                  release_date: '2023-02-01',
                  title: 'Knock at the Cabin',
                  video: false,
                  vote_average: 6.5,
                  vote_count: 608
               }
               ],
               total_pages: 27,
               total_results: 539
            },
            recommendations: {
               page: 1,
               results: [],
               total_pages: 27,
               total_results: 539
            },
            loadingMovie: true,
            loadingCredits: true,
            loadingVideos: false,
            loadingUpcomingMovies: false,
            loadingRecommendations: false,
            errorMovie: false,
            errorCredits: false,
            errorVideos: true,
            errorUpcomingMovies: false,
            errorRecommendations: false
         }
       });
   
      render(
         <Provider store={store2}>
            <HashRouter>
               <Routes>
                  <Route path="/details/:mediaType/:id" element={<Details />} />
               </Routes>
            </HashRouter>
         </Provider>
      );

      const skeletonMovies = screen.getByTestId('skeletonMovieDetails');
      expect(skeletonMovies).toBeInTheDocument();
      const skeletonCredits = screen.getByTestId('skeletonCastCarousel');
      expect(skeletonCredits).toBeInTheDocument();
      const errorMsg = screen.getAllByText('Something is going wrong...');
      expect(errorMsg).toHaveLength(1);
   });
});
