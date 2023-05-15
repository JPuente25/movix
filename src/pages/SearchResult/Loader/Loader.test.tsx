import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { Loader } from '.';

describe('<Loader />', () => {
   test('Renders correctly', () => {
      const {container} = render(<Loader />);
      expect(container).toBeInTheDocument();
   })
})