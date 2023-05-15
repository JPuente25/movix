import { DataProps } from '../../../types';
import { fetchAxios } from '../../../utils/api/api';

interface Props {
   sort: string;
   selectedGenres: Array<number>;
   mediaType: string;
   page: number;
}

const fetchData = async ({ sort, selectedGenres, mediaType, page }: Props) => {
   try {
      const { data, status } = await fetchAxios<DataProps>({
         url: `discover/${mediaType}`,
         params: {
            sort_by: sort,
            with_genres: selectedGenres.join(', '),
            page: page,
         },
      });

      if (status >= 200 && status < 300) {
         return data;
      }
   } catch (e: any) {
      return e;
   }
};

export default fetchData;
