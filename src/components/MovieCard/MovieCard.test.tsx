import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { MovieCard } from '.';
import { HashRouter, useLocation } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('<MovieCard />', () => {
   const mockStore = configureStore([]);
   const store = mockStore({
      home: {
         genres: {
            movie: [
               {
                  id: 1,
                  name: 'action',
               },
            ],
            tv: [
               {
                  id: 1,
                  name: 'action',
               },
            ],
         },
         loadingGenres: true,
         errorGenres: false,
      },
   });

   test('Renders correctly', () => {
      const mockMovie = {
         adult: false,
         backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
         genre_ids: [28, 12, 878],
         id: 505642,
         original_language: 'en',
         original_title: 'Black Panther: Wakanda Forever',
         overview:
            'Queen Ramonda, Shuri, MBaku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
         popularity: 5334.97,
         poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
         release_date: '2022-11-09',
         title: 'Black Panther: Wakanda Forever',
         video: false,
         vote_average: 7.5,
         vote_count: 3298,
      };
      const view = render(
         <Provider store={store}>
            <HashRouter>
               <MovieCard
                  movie={mockMovie}
                  movieWidth={200}
                  selectedMedia="movie"
               />
            </HashRouter>
         </Provider>
      );
      expect(view.container).toBeInTheDocument();
   });

   test('Renders movie poster and textinfo (handle Title Click)', () => {
      const mockMovie = {
         adult: false,
         backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
         genre_ids: [1],
         id: 505642,
         original_language: 'en',
         original_title: 'Black Panther: Wakanda Forever',
         overview:
            'Queen Ramonda, Shuri, MBaku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
         popularity: 5334.97,
         poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
         release_date: '2022-11-09',
         title: 'Black Panther: Wakanda Forever',
         video: false,
         vote_average: 7.5,
         vote_count: 3298,
      };
      render(
         <Provider store={store}>
            <HashRouter>
               <MovieCard
                  movie={mockMovie}
                  movieWidth={200}
                  selectedMedia="movie"
               />
            </HashRouter>
         </Provider>
      );

      const img = screen.getByAltText('movie/cast-picture');
      expect(img).toBeInTheDocument();

      const rating = screen.getByText('7.5');
      expect(rating).toBeInTheDocument();

      const genre = screen.getByText('action');
      expect(genre).toBeInTheDocument();

      const title = screen.getByText('Black Panther: Wakanda Forever');
      expect(title).toBeInTheDocument();
      fireEvent.click(title);
      expect(window.location.hash).toEqual('#/details/movie/505642');

      const date = screen.getByText('Nov 9, 2022');
      expect(date).toBeInTheDocument();

      const poster = screen.getByRole('figure');
      expect(poster).toBeInTheDocument();
      fireEvent.click(poster);
      expect(window.location.hash).toEqual('#/details/movie/505642');
   });

   test('Renders: handle Poster Click', () => {
      const mockMovie = {
         adult: false,
         backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
         genre_ids: [1],
         id: 505642,
         original_language: 'en',
         original_title: 'Black Panther: Wakanda Forever',
         overview:
            'Queen Ramonda, Shuri, MBaku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
         popularity: 5334.97,
         poster_path: '/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
         release_date: '2022-11-09',
         title: 'Black Panther: Wakanda Forever',
         video: false,
         vote_average: 7.5,
         vote_count: 3298,
      };
      render(
         <Provider store={store}>
            <HashRouter>
               <MovieCard
                  movie={mockMovie}
                  movieWidth={200}
                  selectedMedia="movie"
               />
            </HashRouter>
         </Provider>
      );

      const poster = screen.getByRole('figure');
      expect(poster).toBeInTheDocument();
      fireEvent.click(poster);
      expect(window.location.hash).toEqual('#/details/movie/505642');
   });

   test('Renders: Missing PosterPath, movieWidth, voteAverage, title', () => {
      const mockMovie = {
         adult: false,
         backdrop_path: '/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg',
         genre_ids: [],
         id: 505642,
         original_language: 'en',
         original_title: 'Black Panther: Wakanda Forever Alt',
         overview:
            'Queen Ramonda, Shuri, MBaku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
         popularity: 5334.97,
         poster_path: '',
         release_date: '2022-11-09',
         title: '',
         video: false,
         vote_average: 0,
         vote_count: 3298,
      };
      render(
         <Provider store={store}>
            <HashRouter>
               <MovieCard
                  movie={mockMovie}
                  selectedMedia="movie"
               />
            </HashRouter>
         </Provider>
      );

      const img = screen.getByAltText('no-image-found');
      expect(img).toBeInTheDocument();

      const rating = screen.getByText('0.0');
      expect(rating).toBeInTheDocument();

      const genre = screen.queryByText('action');
      expect(genre).not.toBeInTheDocument();

      const title = screen.getByText('Black Panther: Wakanda Forever Alt');
      expect(title).toBeInTheDocument();

      const date = screen.getByText('Nov 9, 2022');
      expect(date).toBeInTheDocument();

      const poster = screen.getByRole('figure');
      expect(poster).toBeInTheDocument();
   });
});
