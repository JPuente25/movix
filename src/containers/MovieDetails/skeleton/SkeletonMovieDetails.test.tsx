import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { SkeletonMovieDetails } from '.';

describe('<SkeletonMovieDetails />', () => {
   test('renders correctly', () => {
      const view = render(<SkeletonMovieDetails />);
      expect(view.container).toBeInTheDocument();
   });
});