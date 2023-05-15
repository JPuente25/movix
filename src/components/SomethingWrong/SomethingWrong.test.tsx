import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { SomethingWrong } from '.';

describe('<SomethingWrong />', () => {
   test('renders correctly', () => {
      const view = render(<SomethingWrong />);
      expect(view.container).toBeInTheDocument();
   })
})