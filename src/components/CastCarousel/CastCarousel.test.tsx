import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { CastCarousel } from '.';

describe('<Cast Carousel />', () => {

   test('Renders Correctly content', () => {
      const mockData = {
         id: 10,
         cast: [{
            adult: false,
            gender: 5,
            id: 5,
            known_for_department: 'string',
            name: 'Actor name',
            original_name: 'string',
            popularity: 5,
            profile_path: '/8eTtJ7XVXY0BnEeUaSiTAraTIXd.jpg',
            cast_id: 5,
            character: 'Character name',
            credit_id: 'string',
            department: 'string',
            job: 'string',
            order: 0,
         }],
         crew: [{
            adult: false,
            gender: 5,
            id: 5,
            known_for_department: 'string',
            name: 'string',
            original_name: 'string',
            popularity: 5,
            profile_path: '/8eTtJ7XVXY0BnEeUaSiTAraTIXd.jpg',
            cast_id: 5,
            character: 'string',
            credit_id: 'string',
            department: 'string',
            job: 'string',
            order: 0,
         }]
      };
      
      const view = render(<CastCarousel data={mockData} />)
      const name = screen.getByText('Actor name');
      const character = screen.getByText('Character name');
      const picture = screen.getByAltText('movie/cast-picture');

      expect(view.container).toBeInTheDocument();
      expect(name).toBeInTheDocument();
      expect(character).toBeInTheDocument();
      expect(picture).toBeInTheDocument();
   });

   //////////////////////////////////////////////////////////////////
   test('Renders Correctly content but NO IMAGE', () => {
      const mockData = {
         id: 10,
         cast: [{
            adult: false,
            gender: 5,
            id: 5,
            known_for_department: 'string',
            name: 'Actor name',
            original_name: 'string',
            popularity: 5,
            profile_path: '',
            cast_id: 5,
            character: 'Character name',
            credit_id: 'string',
            department: 'string',
            job: 'string',
            order: 0,
         }],
         crew: [{
            adult: false,
            gender: 5,
            id: 5,
            known_for_department: 'string',
            name: 'string',
            original_name: 'string',
            popularity: 5,
            profile_path: '',
            cast_id: 5,
            character: 'string',
            credit_id: 'string',
            department: 'string',
            job: 'string',
            order: 0,
         }]
      };

      const view = render(<CastCarousel data={mockData} />)
      const name = screen.getByText('Actor name');
      const character = screen.getByText('Character name');
      const notFoundImg = screen.getByAltText('no-image-found');

      expect(view.container).toBeInTheDocument();
      expect(name).toBeInTheDocument();
      expect(character).toBeInTheDocument();
      expect(notFoundImg).toBeInTheDocument();
   });

   /////////////////////////////////////////////////////////////////////////
   test('Renders No content', () => {
      const mockData = {
         id: 10,
         cast: [],
         crew: []
      };

      render(<CastCarousel data={mockData} />)

      const alert = screen.getByText('There is not content to show!');
      expect(alert).toBeInTheDocument();
   })
})



