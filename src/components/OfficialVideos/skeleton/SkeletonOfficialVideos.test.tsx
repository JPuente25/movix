import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { SkeletonOfficialVideos } from '.';

describe('<SkeletonOfficialVideos />', () => {
   test('renders correctly', () => {
      const view = render(<SkeletonOfficialVideos />);
      const skeletons = screen.getAllByRole('group');

      expect(view.container).toBeInTheDocument();
      expect(skeletons).toHaveLength(8);
   });
});
