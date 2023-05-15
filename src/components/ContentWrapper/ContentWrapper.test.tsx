import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM, fireEvent, render, screen } from '@testing-library/react';
import { ContentWrapper } from '.';

describe('<ContentWrapper />', () => {
   test('renders correctly', () => {
      const view = render(
         <ContentWrapper>
            <h1>Testing</h1>
         </ContentWrapper>
      );
      const testingTitle = screen.getByText('Testing');

      expect(view.container).toBeInTheDocument();
      expect(testingTitle).toBeInTheDocument();
   });
});
