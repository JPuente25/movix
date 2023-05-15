import '@testing-library/jest-dom/extend-expect';
import fetchInitialData from './fetchInitialData';

jest.setTimeout(15000);
describe('fetchInitialData()', () => {
   test('Works correctly', async () => {
      const query = 'a';
      const response = await fetchInitialData(query);

      expect(response).toHaveProperty('page', 1);
      expect(response).toHaveProperty('total_pages');
      expect(response).toHaveProperty('results');
      expect(response).not.toHaveProperty('results', []);
      expect(response).toHaveProperty('total_results');
   });

   test('Works correctly with empty query', async () => {
      const query = '';
      const response = await fetchInitialData(query);

      expect(response).toHaveProperty('page', 1);
      expect(response).toHaveProperty('total_pages', 1);
      expect(response).toHaveProperty('results', []);
      expect(response).toHaveProperty('total_results', 0);
   });
});