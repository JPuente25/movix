import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { NoContent } from '.';

describe('<NoContent />', () => {
   test('renders correctly', () => {
      const view = render(<NoContent />);
      expect(view.container).toBeInTheDocument();
   })
})