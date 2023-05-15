import '@testing-library/jest-dom/extend-expect';
import {
   fireEvent,
   render,
   screen
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SearchResult } from '.';
import fetchInitialData from './functions/fetchInitialData';
import fetchNextPageData from './functions/fetchNextPageData';

jest.mock('./functions/fetchInitialData.ts');
const mockedFetchInitialData = fetchInitialData as any;
jest.mock('./functions/fetchNextPageData.ts');
const mockedFetchNextPageData = fetchNextPageData as any;

window.scrollTo = () => {};

describe('<SearchResult />', () => {
   const mockStore = configureStore([thunk]);
   const store = mockStore({
      home: {
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
         loadingGenres: false,
         errorGenres: false,
      },
   });

   beforeEach(() => {
      window.location.hash = '#/search/avatar';
      jest.resetAllMocks();
   });

   test('Renders correctly', () => {
      const { container } = render(
         <Provider store={store}>
            <HashRouter>
               <Routes>
                  <Route
                     path="/search/:query"
                     element={<SearchResult />}
                  />
               </Routes>
            </HashRouter>
         </Provider>
      );
      expect(container).toBeInTheDocument();
   });

   test('Renders: Data and elements', () => {
      render(
         <Provider store={store}>
            <HashRouter>
               <Routes>
                  <Route
                     path="/search/:query"
                     element={<SearchResult />}
                  />
               </Routes>
            </HashRouter>
         </Provider>
      );

      //Input for search Query
      const searchInput = screen.getByPlaceholderText('avatar');
      expect(searchInput).toBeInTheDocument();

      //Search button
      const searchButton = screen.getByRole('button');
      expect(searchButton).toBeInTheDocument();

      //Loader shows
      const loader = screen.getByRole('figure');
      expect(loader).toBeInTheDocument();
   });

   test('Data fetch: Shows moviesContainer and moviePictures', async () => {
      mockedFetchInitialData.mockResolvedValueOnce({
         page: 1,
         total_pages: 3,
         results: [
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
         ], // 20 results
         total_results: 60,
      });

      render(
         <Provider store={store}>
            <HashRouter>
               <Routes>
                  <Route
                     path="/search/:query"
                     element={<SearchResult />}
                  />
               </Routes>
            </HashRouter>
         </Provider>
      );

      //Loader shows
      const loader = screen.getByRole('figure');
      expect(loader).toBeInTheDocument();

      //MovieContainer shows once data is loaded
      const moviesContainer = await screen.findByRole('contentinfo');
      expect(moviesContainer).toBeInTheDocument();
      expect(moviesContainer.childNodes).toHaveLength(20);

      //Loader dissapear
      expect(loader).not.toBeInTheDocument();

      //Movies Pictures are in document, one for each container
      const moviePictures = screen.getAllByRole('img');
      expect(moviePictures).toHaveLength(20);
   });

   test('New Data Fetch: Search for a new Query', async () => {
      mockedFetchInitialData.mockResolvedValueOnce({
         page: 1,
         total_pages: 3,
         results: [
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
         ], // 20 results
         total_results: 60,
      });

      render(
         <Provider store={store}>
            <HashRouter>
               <Routes>
                  <Route
                     path="/search/:query"
                     element={<SearchResult />}
                  />
               </Routes>
            </HashRouter>
         </Provider>
      );

      //Input and Button for Search Movies
      const searchInput = screen.getByPlaceholderText('avatar');
      const searchButton = screen.getByRole('button');

      //Detect change and search for a new Query, renders new data
      fireEvent.change(searchInput, { target: { value: 'avengers' } });
      fireEvent.click(searchButton);
      expect(window.location.hash).toEqual('#/search/avengers');

      //Loader shows again
      const loader = screen.getByRole('figure');
      expect(loader).toBeInTheDocument();

      //New moviesContainer shows
      const moviesContainer = await screen.findByRole('contentinfo', undefined, { timeout: 5000 });
      expect(moviesContainer).toBeInTheDocument();
      expect(moviesContainer.childNodes).toHaveLength(20);

      //Movies Pictures are in document, one for each container
      const moviePictures = screen.getAllByRole('img');
      expect(moviePictures).toHaveLength(20);

      //Test non-action on passing an empty query
      fireEvent.change(searchInput, { target: { value: '' } });
      fireEvent.click(searchButton);
      expect(window.location.hash).toEqual('#/search/avengers');
   });

   test('Next Page Data fetch: Add 20 more movies after scrolling to bottom', async () => {
      mockedFetchInitialData.mockResolvedValueOnce({
         page: 1,
         total_pages: 3,
         results: [
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
         ], // 20 results
         total_results: 60,
      });

      mockedFetchNextPageData.mockResolvedValueOnce({
         page: 2,
         total_pages: 3,
         results: [
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Movie 2nd page',
               overview: '2nd movie overview',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Movie 2nd page',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
         ], // 20 results
         total_results: 60,
      });

      render(
         <Provider store={store}>
            <HashRouter>
               <Routes>
                  <Route
                     path="/search/:query"
                     element={<SearchResult />}
                  />
               </Routes>
            </HashRouter>
         </Provider>
      );

      //MovieContainer shows once data is loaded
      const moviesContainer = await screen.findByRole('contentinfo');
      expect(moviesContainer.childNodes).toHaveLength(20);

      //Handle next Page render: MoviesContainer should have 40 children
      fireEvent.scroll(window, { target: { scrollY: 2000 } });

      const newMoviesTitles = await screen.findAllByText('Movie 2nd page');
      expect(newMoviesTitles).toHaveLength(20);

      const moviesContainer2 = screen.getByRole('contentinfo');
      expect(moviesContainer2.childNodes).toHaveLength(40);
   });

   test('Fetch data: No results: Renders <NoContent /> 2', async () => {
      mockedFetchInitialData.mockResolvedValueOnce({
         page: 1,
         total_pages: 1,
         results: [], // 0 results
         total_results: 0,
      });

      render(
         <Provider store={store}>
            <HashRouter>
               <Routes>
                  <Route
                     path="/search/:query"
                     element={<SearchResult />}
                  />
               </Routes>
            </HashRouter>
         </Provider>
      );

      //Loader shows
      const loader = screen.getByRole('figure');
      expect(loader).toBeInTheDocument();

      //MovieContainer shows once data is loaded
      const noContent = await screen.findByText('There is not content to show!');
      expect(noContent).toBeInTheDocument();

      //Loader dissapear
      expect(loader).not.toBeInTheDocument();
   });

   test('Next Page Data fetch: Not more data on next page', async () => {
      mockedFetchInitialData.mockResolvedValueOnce({
         page: 1,
         total_pages: 1,
         results: [
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: 'Black Panther: Wakanda Forever',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: 'Black Panther: Wakanda Forever',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
         ], // 20 results
         total_results: 20,
      });

      mockedFetchNextPageData.mockResolvedValueOnce({
         page: 2,
         total_pages: 1,
         results: [], // 0 results
         total_results: 20,
      });

      render(
         <Provider store={store}>
            <HashRouter>
               <Routes>
                  <Route
                     path="/search/:query"
                     element={<SearchResult />}
                  />
               </Routes>
            </HashRouter>
         </Provider>
      );

      //MovieContainer shows once data is loaded
      const moviesContainer = await screen.findByRole('contentinfo');
      expect(moviesContainer.childNodes).toHaveLength(20);

      //Handle next Page render: MoviesContainer should have 20 same children
      fireEvent.scroll(window, { target: { scrollY: 2000 } });

      //Shouldn't have called fetchNextPage
      expect(mockedFetchNextPageData).not.toBeCalled();

      //Shouldn't have new movies
      const moviesContainer2 = screen.getByRole('contentinfo');
      expect(moviesContainer2.childNodes).toHaveLength(20);
   });
});
