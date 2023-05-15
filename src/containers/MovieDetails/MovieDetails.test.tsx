import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { MovieDetails } from '.';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { DataProps } from '../../types';
import { notDeepEqual } from 'assert';

describe('<MovieDetails />', () => {
   const mockStore = configureStore([]);

   const mockMovie = {
      adult: false,
      backdrop_path: '/zWDMQX0sPaW2u0N2pJaYA8bVVaJ.jpg',
      genres: [
         {
            id: 9648,
            name: 'Mystery',
         },
      ],
      id: 631842,
      original_language: 'en',
      original_title: 'Knock at the Cabin',
      overview: 'While vacationing',
      popularity: 222.77,
      release_date: '2023-02-01',
      revenue: 40000000,
      runtime: 100,
      poster_path: '/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg',
      status: 'Released',
      tagline: 'Save your family or save humanity. Make the choice.',
      title: 'Knock at the Cabin',
      video: false,
      vote_average: 6.6,
      vote_count: 334,
   };

   const mockCredits = {
      id: 631842,
      cast: [
         {
            adult: false,
            gender: 2,
            id: 221611,
            known_for_department: 'Acting',
            name: 'Jonathan Groff',
            original_name: 'Jonathan Groff',
            popularity: 13.408,
            profile_path: '/3kmnYKAzSc3Lp7iK5pcj97Hx9Cm.jpg',
            cast_id: 13,
            character: 'Eric',
            credit_id: '6220fdc06f43ec00446ff1d1',
            order: 0,
         },
      ],
      crew: [
         {
            adult: false,
            gender: 2,
            id: 5669,
            known_for_department: 'Production',
            name: 'Douglas Aibel',
            original_name: 'Douglas Aibel',
            popularity: 1.4,
            profile_path: '/vpB6bSIQd4PODpr7mHRjDlXx2VF.jpg',
            credit_id: '61daa2fcd2c0c100656fe06b',
            department: 'Writing',
            job: 'Director',
         },
      ],
   };

   /////////////////////////////////////////////////////////////////////////////////////////////////
   test('Renders correctly', () => {
      const store = mockStore({
         details: {
            videos: [
               {
                  iso_639_1: 'en',
                  iso_3166_1: 'US',
                  name: 'Opportunity of a Lifetime',
                  key: 'aFWKrxBfZls',
                  site: 'YouTube',
                  size: 1080,
                  type: 'Behind the Scenes',
                  official: true,
                  published_at: '2023-01-27T19:00:00.000Z',
                  id: '63d4a05020e6a5007ffc77fe',
               },
            ],
            loadingVideos: true,
            errorVideos: false,
         },
      });
      const view = render(
         <Provider store={store}>
            <MovieDetails
               data={mockMovie}
               credits={mockCredits}
            />
         </Provider>
      );

      expect(view.container).toBeInTheDocument();
   });

   /////////////////////////////////////////////////////////////////////////////////////////////////
   test('Renders: Movie Info', () => {
      const store = mockStore({
         details: {
            videos: [
               {
                  iso_639_1: 'en',
                  iso_3166_1: 'US',
                  name: 'Opportunity of a Lifetime',
                  key: 'aFWKrxBfZls',
                  site: 'YouTube',
                  size: 1080,
                  type: 'trailer',
                  official: true,
                  published_at: '2023-01-27T19:00:00.000Z',
                  id: '63d4a05020e6a5007ffc77fe',
               },
            ],
         },
      });
      render(
         <Provider store={store}>
            <MovieDetails
               data={mockMovie}
               credits={mockCredits}
            />
         </Provider>
      );

      const posterImages = screen.getAllByAltText('movie/cast-picture');
      expect(posterImages).toHaveLength(2);

      const title = screen.getByText('Knock at the Cabin (2023)');
      expect(title).toBeInTheDocument();

      const tagline = screen.getByText('Save your family or save humanity. Make the choice.');
      expect(tagline).toBeInTheDocument();

      const genre = screen.getByText('Mystery');
      expect(genre).toBeInTheDocument();

      const rating = screen.getByText('6.6');
      expect(rating).toBeInTheDocument();

      // eslint-disable-next-line testing-library/no-node-access
      const TrailerButton = screen.getByText('Watch Trailer').parentElement;
      expect(TrailerButton).toHaveStyle('display: flex');

      const overview = screen.getByText('While vacationing');
      expect(overview).toBeInTheDocument();

      const statusText = screen.getByText(/Status:/);
      expect(statusText).toBeInTheDocument();
      const releaseDateText = screen.getByText(/Release Date:/);
      expect(releaseDateText).toBeInTheDocument();
      const runtimeText = screen.getByText(/Runtime:/);
      expect(runtimeText).toBeInTheDocument();
      const directorText = screen.getByText(/Director:/);
      expect(directorText).toBeInTheDocument();
      const writersText = screen.getByText(/Writers:/);
      expect(writersText).toBeInTheDocument();
   });

   test('Renders: Missing PosterPath, title, trailerVideo', () => {
      const mockMovie2 = {
         adult: false,
         backdrop_path: '/zWDMQX0sPaW2u0N2pJaYA8bVVaJ.jpg',
         genres: [
            {
               id: 9648,
               name: 'Mystery',
            },
         ],
         id: 631842,
         original_language: 'en',
         original_title: 'Knock at the Cabin',
         overview: 'While vacationing',
         popularity: 222.77,
         release_date: '2023-02-01',
         revenue: 40000000,
         runtime: 100,
         poster_path: '',
         status: 'Released',
         tagline: 'Save your family or save humanity. Make the choice.',
         title: '',
         video: false,
         vote_average: 6.6,
         vote_count: 334,
      } 
      const store = mockStore({
         details: {
            videos: [],
         },
      });
      render(
         <Provider store={store}>
            <MovieDetails
               data={mockMovie2}
               credits={mockCredits}
            />
         </Provider>
      );
      // eslint-disable-next-line testing-library/no-node-access
      const TrailerButton = screen.getByText('Watch Trailer').parentElement;
      expect(TrailerButton).toHaveStyle('display: none');

      const posterImages = screen.getAllByAltText('no-image-found');
      expect(posterImages).toHaveLength(2);

      const title = screen.getByText('Knock at the Cabin (2023)');
      expect(title).toBeInTheDocument();
   });

      /////////////////////////////////////////////////////////////////////////////////////////////////
      test('Renders: Handle Click', () => {
         const store = mockStore({
            details: {
               videos: [
                  {
                     iso_639_1: 'en',
                     iso_3166_1: 'US',
                     name: 'Opportunity of a Lifetime',
                     key: 'aFWKrxBfZls',
                     site: 'YouTube',
                     size: 1080,
                     type: 'trailer',
                     official: true,
                     published_at: '2023-01-27T19:00:00.000Z',
                     id: '63d4a05020e6a5007ffc77fe',
                  },
               ],
            },
         });
         render(
            <Provider store={store}>
               <MovieDetails
                  data={mockMovie}
                  credits={mockCredits}
               />
            </Provider>
         );
   
         let videoContainer = screen.queryByRole('group');
         expect(videoContainer).not.toBeInTheDocument();
         const watchTrailerButton = screen.getByRole('contentinfo');
         fireEvent.click(watchTrailerButton);
         videoContainer = screen.getByRole('group');
         expect(videoContainer).toBeInTheDocument();
      });
});
