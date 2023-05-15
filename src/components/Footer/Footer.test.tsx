import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Footer } from '.';

describe('<Footer />', () => {
   test('Renders without crashing', () => {
      const view = render(<Footer />);
      expect(view.container).toBeInTheDocument();
   });
})