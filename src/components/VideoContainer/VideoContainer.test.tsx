import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { VideoContainer } from '.';

describe('<VideoContainer />', () => {
   const mockHandler = jest.fn();

   test('Render correctly', () => {
      const view = render(<VideoContainer toggleVideoView={mockHandler} videoUrl="string"/>);
      const icon = screen.getByRole('figure');
      expect(view.container).toBeInTheDocument();
      expect(icon).toBeInTheDocument();

      fireEvent.click(icon);
      expect(mockHandler).toBeCalledTimes(1);
   })
})