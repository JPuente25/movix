import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { NotFound } from '.';

describe('<NotFound />', () => {
   test('renders correctly', () => {
      const view = render(<NotFound type="page"/>);
      expect(view.container).toBeInTheDocument();

      const pageText = screen.getByText('Page not found!');
      expect(pageText).toBeInTheDocument();

      view.rerender(<NotFound type="media"/>);
      const mediaText = screen.getByText('This movie or TV Show is not available');
      expect(mediaText).toBeInTheDocument();
   })
})