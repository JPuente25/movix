import '@testing-library/jest-dom/extend-expect';
import fetchNextPageData from './fetchNextPageData';

jest.setTimeout(15000);
describe('fetchNextPageData()', () => {

   test('Works correctly', async () => {
      const query = 'a';
      const response = await fetchNextPageData({
         query: query,
         page: 2
      });

      expect(response).toHaveProperty('page', 2);
      expect(response).toHaveProperty('total_pages');
      expect(response).toHaveProperty('results');
      expect(response?.results).not.toHaveLength(0);
      expect(response).toHaveProperty('total_results');
   });

   test('Works correctly with empty query', async () => {
      const query = '';
      const response = await fetchNextPageData({
         query: query,
         page: 2
      });

      expect(response).toHaveProperty('page', 2);
      expect(response).toHaveProperty('total_pages', 1);
      expect(response).toHaveProperty('results', []);
      expect(response).toHaveProperty('total_results', 0);
   });
});
