import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Explore } from '.';
import fetchData from './functions/fetchData';

jest.mock('./functions/fetchData.ts');
const mockedFetchData = fetchData as jest.Mocked<any>;
window.scrollTo = () => {};

describe('<Explore />', () => {

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
      window.location.hash = '#/explore/movie';
      jest.resetAllMocks();
   })

   test('Renders correctly', () => {
      const { container } = render(
         <Provider store={store}>
            <HashRouter>
               <Routes>
                  <Route
                     path="/explore/:mediaType"
                     element={<Explore />}
                  />
               </Routes>
            </HashRouter>
         </Provider>
      );

      expect(container).toBeInTheDocument();
      expect(mockedFetchData).toBeCalled();
   });

   test('Renders: Data and information (loading state)', () => {
      render(
         <Provider store={store}>
            <HashRouter>
               <Routes>
                  <Route
                     path="/explore/:mediaType"
                     element={<Explore />}
                  />
               </Routes>
            </HashRouter>
         </Provider>
      );
      
      const title = screen.getByText('Explore Movies');
      expect(title).toBeInTheDocument();

      const sortByOption = screen.getByText('Sort by');
      expect(sortByOption).toBeInTheDocument();

      const selectGenresOption = screen.getByText('Select genres');
      expect(selectGenresOption).toBeInTheDocument();

      const loader = screen.getByRole('figure');
      expect(loader).toBeInTheDocument(); 
   });
   
   test('Renders: Fetch initial data and next page', async () => {
      mockedFetchData.mockResolvedValue({
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
                     path="/explore/:mediaType"
                     element={<Explore />}
                  />
               </Routes>
            </HashRouter>
         </Provider>
      );

      //Loader is at first render
      const loader = screen.getByRole('figure');
      expect(loader).toBeInTheDocument(); 
      
      //After fetching initial data, movies container shows
      const moviesContainer = await screen.findByRole('contentinfo');
      expect(moviesContainer).toBeInTheDocument();
      expect(moviesContainer.childNodes).toHaveLength(20);

      //Title for every one of the 20 movies in movies container
      const moviesTitle = await screen.findAllByText('Black Panther: Wakanda Forever');
      expect(moviesTitle).toHaveLength(20);

      //Loader is not anymore
      expect(loader).not.toBeInTheDocument();

      //Reset mock to be nextPage mock
      mockedFetchData.mockReset();
      mockedFetchData.mockResolvedValueOnce({
         page: 2,
         total_pages: 3,
         results: [
            {
               adult: false,
               backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
               genre_ids: [28, 12, 878],
               id: 505642,
               original_language: 'en',
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
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
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
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
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
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
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
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
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
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
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
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
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
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
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
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
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
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
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
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
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
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
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
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
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
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
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
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
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
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
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
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
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
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
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
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
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
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
               original_title: '2nd page movie',
               overview:
                  'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
               popularity: 3095.36,
               poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
               release_date: '2022-11-09',
               title: '2nd page movie',
               video: false,
               vote_average: 7.4,
               vote_count: 3494,
            },
         ], // 20 results
         total_results: 60,
      });

      //Scroll down to the bottom
      fireEvent.scroll(window, { target: { scrollY: 2000 } });

      //Finds new movie titles
      const moviesTitle2 = await screen.findAllByText('2nd page movie');
      expect(moviesTitle2).toHaveLength(20);

      //Movies container now has 40 children
      expect(moviesContainer.childNodes).toHaveLength(40);
   });

   test('Bad path: 404 page', () => {
      mockedFetchData.mockResolvedValue({
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

      window.location.hash = '#/explore/tvs';

      render(
         <Provider store={store}>
            <HashRouter>
               <Routes>
                  <Route
                     path="/explore/:mediaType"
                     element={<Explore />}
                  />
               </Routes>
            </HashRouter>
         </Provider>
      );

      
      // eslint-disable-next-line testing-library/no-node-access
      const notFound = screen.getByText('404');
      expect(notFound).toBeInTheDocument();

      const title = screen.queryByText(/Explore/);
      expect(title).not.toBeInTheDocument();
   })

   test('Renders: Fetch empty initial data', async () => {
      mockedFetchData.mockResolvedValue({
         page: 1,
         total_pages: 1,
         results: [], // 0 results
         total_results: 0,
      });

      window.location.hash = '#/explore/tv';

      render(
         <Provider store={store}>
            <HashRouter>
               <Routes>
                  <Route
                     path="/explore/:mediaType"
                     element={<Explore />}
                  />
               </Routes>
            </HashRouter>
         </Provider>
      );
      
      //After fetching initial data and empty results, No Content shows
      const moviesContainer = await screen.findByText('There is not content to show!');
      expect(moviesContainer).toBeInTheDocument();
   });
});
