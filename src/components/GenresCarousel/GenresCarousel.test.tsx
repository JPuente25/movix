import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { GenresCarousel } from '.';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('<GenresCarousel />', () => {
   const mockStore = configureStore([]);

   test('renders correctly', () => {
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

      const mockData = [1];

      const view = render(
         <Provider store={store}>
            <GenresCarousel data={mockData} />
         </Provider>
      );
      const genreElement = screen.queryByText('action');

      expect(view.container).toBeInTheDocument();
      expect(genreElement).toBeInTheDocument();
   });

   //////////////////////////////////////////////////////////////////////
   test('renders: No genres', () => {
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

      const mockData: Array<number> = [];

      render(
         <Provider store={store}>
            <GenresCarousel data={mockData} />
         </Provider>
      );

      const genreElement = screen.queryByText('action');

      expect(genreElement).not.toBeInTheDocument();
   });

      //////////////////////////////////////////////////////////////////////
      test('renders: genres that doesnt exist', () => {
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
   
         const mockData: Array<number> = [2];
   
         render(
            <Provider store={store}>
               <GenresCarousel data={mockData} />
            </Provider>
         );
   
         const genreElement = screen.queryByText('action');
   
         expect(genreElement).not.toBeInTheDocument();
      });
});
