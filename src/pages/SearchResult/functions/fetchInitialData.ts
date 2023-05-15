import { DataProps } from '../../../types';
import { fetchAxios } from '../../../utils/api/api';

const fetchInitialData = async (query: string): Promise<DataProps | undefined> => {
   try {
      const { data, status } = await fetchAxios<DataProps>('/search/multi', {
         params: {
            query: query,
            page: 1,
         },
      });

      if (status >= 200 && status < 300) {
         return {
            ...data,
            results: data.results.filter((movie) => movie.media_type !== 'person'),
         };
      }
   } catch (e: any) {
      throw e;
   }
};

export default fetchInitialData;
