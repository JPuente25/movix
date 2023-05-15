import React, { useState } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { MoviesCarousel } from '.';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { DataProps, Genres } from '../../types';
import { HashRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

describe('<MoviesCarousel />', () => {
   const mockStore = configureStore([thunk]);
   const store = mockStore({
      home: {
         genres: {} as Genres,
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
               }
            ],
            total_pages: 1,
            total_results: 1,
            page: 1,
         },
         popularMovies: {} as DataProps,
         topRatedMovies: {} as DataProps,
         loadingGenres: false,
         loadingTrending: false,
         loadingPopular: true,
         loadingTopRated: true,
         errorGenres: false,
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
               }
            ],
            total_pages: 1,
            total_results: 1,
            page: 1,
         } as DataProps,
         loadingUpcomingMovies: true,
         loadingRecommendations: false,
         errorUpcomingMovies: false,
         errorRecommendations: false,
      },
   });

   test('renders correctly', () => {
      const view = render(
         <Provider store={store}>
            <HashRouter>
               <MoviesCarousel
                  title="A generic title"
                  dataType="trending"
                  options={[
                     { label: 'Day', value: 'day' },
                     { label: 'Week', value: 'week' },
                  ]}
                  className="testing"
               />
            </HashRouter>
         </Provider>
      );

      expect(view.container).toBeInTheDocument();
   });

   test('Renders: Data and elements', () => {
      render(
         <Provider store={store}>
            <HashRouter>
               <MoviesCarousel
                  title="A generic title"
                  dataType="trending"
                  options={[
                     { label: 'Day', value: 'day' },
                     { label: 'Week', value: 'week' },
                  ]}
                  className="testing"
               />
            </HashRouter>
         </Provider>
      );
      
      const title = screen.getByText(/A generic title/);
      expect(title).toBeInTheDocument();
      
      const dayTab = screen.getByText('Day');
      expect(dayTab).toBeInTheDocument();
      
      const weekTab = screen.getByText('Week');
      expect(weekTab).toBeInTheDocument();
      
      const movieContainer = screen.getByRole('contentinfo');
      expect(movieContainer).toBeInTheDocument();
      expect(movieContainer).not.toBeEmptyDOMElement();

      const arrowIcons = screen.queryAllByTestId('arrowIcon');
      expect(arrowIcons).toHaveLength(2);
   });

   test('Renders: Handle events', () => {
      Element.prototype.scrollTo = () => {}
      const scrollMock = jest.spyOn(Element.prototype, 'scrollTo');

      render(
         <Provider store={store}>
            <HashRouter>
               <MoviesCarousel
                  title="A generic title"
                  dataType="trending"
                  options={[
                     { label: 'Day', value: 'day' },
                     { label: 'Week', value: 'week' },
                  ]}
                  className="testing"
               />
            </HashRouter>
         </Provider>
      );

      const [leftArrow, rightArrow] = screen.queryAllByTestId('arrowIcon');
      fireEvent.click(rightArrow);
      expect(scrollMock).toBeCalledTimes(1);
      fireEvent.click(leftArrow);
      expect(scrollMock).toBeCalledTimes(2);

      const dayTab = screen.getByText('Day');
      const weekTab = screen.getByText('Week');
      const dayTitle = screen.queryByText('A generic title: Day');
      fireEvent.click(dayTab);
      expect(dayTitle).toBeInTheDocument();
      fireEvent.click(weekTab);
      const weekTitle = screen.getByText('A generic title: Week');
      expect(weekTitle).toBeInTheDocument();
   });

   test('Renders data: fixedMedia', () => {
      render(
         <Provider store={store}>
            <HashRouter>
               <MoviesCarousel
                  title="A generic title"
                  dataType="trending"
                  fixedMedia="day"
               />
            </HashRouter>
         </Provider>
      );

      const arrowIcons = screen.queryAllByTestId('arrowIcon');
      expect(arrowIcons).toHaveLength(2);

      const title = screen.getByText(/A generic title/);
      expect(title).toBeInTheDocument();

      const dayTab = screen.queryByText('Day');
      expect(dayTab).not.toBeInTheDocument();

      const weekTab = screen.queryByText('Week');
      expect(weekTab).not.toBeInTheDocument();

      const movieContainer = screen.getByRole('contentinfo');
      expect(movieContainer).toBeInTheDocument();
      expect(movieContainer).not.toBeEmptyDOMElement();
   });

   test('Renders data: Not fixedMedia or Options', () => {
      render(
         <Provider store={store}>
            <HashRouter>
               <MoviesCarousel
                  title="A generic title"
                  dataType="recommendations"
               />
            </HashRouter>
         </Provider>
      );

      const arrowIcons = screen.queryAllByTestId('arrowIcon');
      expect(arrowIcons).toHaveLength(2);

      const title = screen.getByText('A generic title');
      expect(title).toBeInTheDocument();

      const dayTab = screen.queryByText('Day');
      expect(dayTab).not.toBeInTheDocument();

      const weekTab = screen.queryByText('Week');
      expect(weekTab).not.toBeInTheDocument();

      const movieContainer = screen.getByRole('contentinfo');
      expect(movieContainer).toBeInTheDocument();
      expect(movieContainer).not.toBeEmptyDOMElement();
   });

   test('Renders: Not movie container found, so Container.current === null, do nothing when handleClick on arrows', () => {
      Element.prototype.scrollTo = () => {};
      const scrollMock = jest.spyOn(Element.prototype, 'scrollTo');

      render(
         <Provider store={store}>
            <HashRouter>
               <MoviesCarousel
                  title="A generic title"
                  dataType="recommendations"
                  fixedMedia='movie'
               />
            </HashRouter>
         </Provider>
      );

      const arrowIcons = screen.queryAllByTestId('arrowIcon');
      expect(arrowIcons).toHaveLength(2);
      const [leftArrow, rightArrow] = arrowIcons;
      fireEvent.click(rightArrow);
      fireEvent.click(leftArrow);
      expect(scrollMock).not.toBeCalled();

      const somethingWrong = screen.getByText('Something is going wrong...');
      expect(somethingWrong).toBeInTheDocument();
   });
});
