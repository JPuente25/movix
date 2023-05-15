import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { Img } from '.';
import exp from 'constants';

describe('<Img />', () => {
   test('Renders correctly', () => {
      const view = render(<Img src="https://image.tmdb.org/t/p/original/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg" />)
      const image = screen.getByAltText('movie/cast-picture');
      expect(view.container).toBeInTheDocument();
      expect(image).toBeInTheDocument();
   });

   test('Renders: image not found', () => {
      const view = render(<Img src={null} />)
      const imageNotFound = screen.getByAltText('no-image-found');
      
      expect(view.container).toBeInTheDocument();
      expect(imageNotFound).toBeInTheDocument();
   });
})