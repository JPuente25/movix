import { DataProps } from '../../../types';
import { fetchAxios } from '../../../utils/api/api';

interface Props {
   query: string;
   page: number;
}

const fetchNextPageData = async ({
   query,
   page,
}:
Props): Promise<DataProps | undefined> => {
   try {
      const { data, status } = await fetchAxios<DataProps>('/search/multi', {
         params: {
            query: query,
            page: page,
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

export default fetchNextPageData;
