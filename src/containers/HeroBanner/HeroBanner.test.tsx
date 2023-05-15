import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { HeroBanner } from '.';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { DataProps } from '../../types';

describe('<HeroBanner />', () => {
   const mockStore = configureStore([]);
   const store = mockStore({
      home: {
         popularMovies: {
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
         loadingPopular: false,
      },
   });

   beforeEach(() => {
      window.location.hash = '#/';
   });

   test('Renders correctly', () => {
      const view = render(
         <Provider store={store}>
            <HashRouter>
               <HeroBanner />
            </HashRouter>
         </Provider>
      );

      expect(view.container).toBeInTheDocument();
   });

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   test('Renders: Data and elements', () => {
      render(
         <Provider store={store}>
            <HashRouter>
               <HeroBanner />
            </HashRouter>
         </Provider>
      );

      const backgroundImage = screen.getByAltText('movie/cast-picture');
      expect(backgroundImage).toBeInTheDocument();

      const title = screen.getByText('Welcome.');
      expect(title).toBeInTheDocument();

      const subtitle = screen.getByText(
         'Millions of movies, TV shows and people to discover. Explore now.'
      );
      expect(subtitle).toBeInTheDocument();

      const inputSearch = screen.getByPlaceholderText('Search for a movie o TV show...');
      expect(inputSearch).toBeInTheDocument();

      const buttonSearch = screen.getByText('Search');
      expect(buttonSearch).toBeInTheDocument();
   });

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   test('Renders: handle events', () => {
      const mockTimeout = jest.spyOn(global, 'setTimeout');

      render(
         <Provider store={store}>
            <HashRouter>
               <HeroBanner />
            </HashRouter>
         </Provider>
      );

      //Write nothing and Hit Enter (no redirect / input Alert)
      const inputSearch = screen.getByPlaceholderText('Search for a movie o TV show...');
      const buttonSearch = screen.getByText('Search');
      fireEvent.change(inputSearch, { target: { value: '' } });
      fireEvent.click(buttonSearch);
      expect(inputSearch).toHaveAttribute('placeholder', 'Come on! Give me some information');
      expect(window.location.hash).toBe('#/');
      expect(mockTimeout).toBeCalled();

      //Write something and Hit Enter (redirect)
      fireEvent.change(inputSearch, { target: { value: 'aaa' } });
      fireEvent.click(buttonSearch);
      expect(window.location.hash).toBe('#/search/aaa');
   });

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   test('Renders: no popular results', () => {
      const noPopularStore = mockStore({
         home: {
            popularMovies: {
               results: [],
               total_pages: 1,
               total_results: 1,
               page: 1,
            },
            loadingPopular: false,
         },
      });

      render(
         <Provider store={noPopularStore}>
            <HashRouter>
               <HeroBanner />
            </HashRouter>
         </Provider>
      );

      const backgroundImage = screen.queryByAltText('movie/cast-picture');
      expect(backgroundImage).not.toBeInTheDocument();
   });

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   test('Renders: no popular data', () => {
      const noPopularStore = mockStore({
         home: {
            popularMovies: {} as DataProps,
            loadingPopular: false,
         },
      });

      render(
         <Provider store={noPopularStore}>
            <HashRouter>
               <HeroBanner />
            </HashRouter>
         </Provider>
      );

      const backgroundImage = screen.queryByAltText('movie/cast-picture');
      expect(backgroundImage).not.toBeInTheDocument();
   });
});
