import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { VideoPlayer } from '.';

describe('<VideoPlayer />', () => {
   test('Renders correctly', () => {
      let view = render(<VideoPlayer src="string"/>);
      expect(view.container).toBeInTheDocument();
   });

   test('Renders correctly with src=undefined', () => {
      let view = render(<VideoPlayer src={undefined} />);
      expect(view.container).toBeInTheDocument();
   })
})