import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { SkeletonMoviesCarousel } from '.';

describe('<SkeletonMoviesCarousel />', () => {
   test('renders correctly', () => {
      const view = render(<SkeletonMoviesCarousel />);
      const skeletons = screen.getAllByRole('group');

      expect(view.container).toBeInTheDocument();
      expect(skeletons).toHaveLength(15);
   });
});