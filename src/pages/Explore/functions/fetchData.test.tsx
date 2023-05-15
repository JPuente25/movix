import '@testing-library/jest-dom/extend-expect';
import fetchData from './fetchData';

jest.setTimeout(15000);
describe('fetchData()', () => {

   test('Works correctly: First page', async () => {
      const response = await fetchData({
         sort: 'popularity.desc',
         selectedGenres: [28, 12],
         mediaType: 'movie',
         page: 1
      });

      expect(response).toHaveProperty('page', 1);
      expect(response).toHaveProperty('total_pages');
      expect(response).toHaveProperty('total_results');
      expect(response).toHaveProperty('results');
      expect(response?.results).not.toHaveLength(0);
   });

   test('Works correctly: Empty genres', async () => {
      const response = await fetchData({
         sort: 'popularity.asc',
         selectedGenres: [],
         mediaType: 'movie',
         page: 2
      });

      expect(response).toHaveProperty('page', 2);
      expect(response).toHaveProperty('total_pages');
      expect(response).toHaveProperty('results');
      expect(response).toHaveProperty('total_results');
   });

   test('Works correctly: status 404', async () => {
      const response = await fetchData({
         sort: 'popularity.asc',
         selectedGenres: [],
         mediaType: 'movip',
         page: 2
      });

      expect(response.name).toBe('AxiosError');
   });
});