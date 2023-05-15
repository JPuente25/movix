import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { SkeletonCastCarousel } from '.';

describe('<SkeletonCastCarousel />', () => {
   test('renders correctly', () => {
      const view = render(<SkeletonCastCarousel />);
      const skeletons = screen.getAllByRole('group');

      expect(view.container).toBeInTheDocument();
      expect(skeletons).toHaveLength(8);
   });
});
