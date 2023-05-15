import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { PlayIcon } from '.';

describe('<PlayButton />', () => {
   test('renders correctly', () => {
      const mockHandler = jest.fn();
      const view = render(<PlayIcon toggleVideoView={mockHandler}/>);

      expect(view.container).toBeInTheDocument();

      const clickBox = screen.getByRole('contentinfo');
      fireEvent.click(clickBox);

      expect(mockHandler).toBeCalled();
   })
})