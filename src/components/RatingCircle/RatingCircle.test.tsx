import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { RatingCircle } from '.';

describe('<RatingCircle />', () => {
   test('Renders correctly', () => {
      const view = render(<RatingCircle rating='8.0'/>);
      expect(view.container).toBeInTheDocument();

      const ratingValue = screen.getByText('8.0');
      // eslint-disable-next-line testing-library/no-node-access
      const ratingStroke = document.querySelector('.CircularProgressbar-path');
      expect(ratingValue).toBeInTheDocument();
      expect(ratingStroke).toHaveStyle('stroke: green');
   });

   test('Renders: Red on <5.0', () => {
      render(<RatingCircle rating='4.0'/>);

      // eslint-disable-next-line testing-library/no-node-access
      const ratingStroke = document.querySelector('.CircularProgressbar-path');
      expect(ratingStroke).toHaveStyle('stroke: red');
   });

   test('Renders: Orange on <7.0', () => {
      render(<RatingCircle rating='6.0'/>);

      // eslint-disable-next-line testing-library/no-node-access
      const ratingStroke = document.querySelector('.CircularProgressbar-path');
      expect(ratingStroke).toHaveStyle('stroke: orange');
   });

   test('Renders: Green on >7.0', () => {
      render(<RatingCircle rating='8.0'/>);

      // eslint-disable-next-line testing-library/no-node-access
      const ratingStroke = document.querySelector('.CircularProgressbar-path');
      expect(ratingStroke).toHaveStyle('stroke: green');
   });
})