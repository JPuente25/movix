import React, { useState, useEffect } from 'react';
import _ from 'underscore';
import { v4 as uuidv4 } from 'uuid';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { DataProps } from '../../types';
import { fetchAxios } from '../../utils/api/api';
import { MoviesContainer } from '../Explore/index.styled';
import { MovieCard } from '../../components/MovieCard';
import { Container } from './index.styled';
import { Loader } from './Loader';
import { NoContent } from '../../components/NoContent';
import { unsetErrors } from '../../features/movix/DetailsSlice';
import { useAppDispatch } from '../../app/hooks';
import { SearchField } from '../../containers/HeroBanner/index.styled';

interface SearchStates {
   data: DataProps;
   page: number;
   loading: boolean;
}

const SearchResult = () => {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const location = useLocation();
   const params = useParams();
   const paramsQuery = params.query!;
   const [data, setData] = useState<SearchStates['data']>({} as DataProps);
   const [page, setPage] = useState<SearchStates['page']>(1);
   const [loading, setLoading] = useState<SearchStates['loading']>(true);
   let searchQuery = '';

   const fetchInitialData = async () => {
      try {
         const { data: searchData, status } = await fetchAxios<DataProps>('/search/multi', {
            params: {
               query: paramsQuery,
               page: 1,
            },
         });

         if (status >= 200 && status < 300) {
            setData({
               page: searchData.page,
               total_pages: searchData.total_pages,
               results: searchData.results.filter((movie) => movie.media_type !== 'person'),
               total_results: searchData.total_results,
            });
            setLoading(false);
            setPage(2);
         }
      } catch (e: any) {
         console.log(e);
      }
   };

   const fetchNextPageData = async () => {
      try {
         const { data: searchData, status } = await fetchAxios<DataProps>('/search/multi', {
            params: {
               query: paramsQuery,
               page: page,
            },
         });

         if (status >= 200 && status < 300) {
            setData({
               page: searchData.page,
               results: [
                  ...data.results,
                  ...searchData.results.filter((movie) => movie.media_type !== 'person'),
               ],
               total_results: searchData.total_results,
               total_pages: searchData.total_pages,
            });
            setPage(searchData.page + 1);
         }
      } catch (e: any) {
         console.log(e.target);
      }
   };

   const handleNextPage = () => {
      const throttleFetch = _.throttle(() => {
         fetchNextPageData();
      }, 3000);
      throttleFetch();
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      searchQuery = e.target.value;
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (searchQuery !== '') {
         navigate(`/search/${searchQuery}`);
         setLoading(true);
      }
   };

   useEffect(() => {
      fetchInitialData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [params]);

   useEffect(() => {
      dispatch(unsetErrors());
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [location]);

   return (
      <Container>

         <SearchField
            onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder={paramsQuery}
               onChange={handleChange}
            />

            <button type="submit">Search</button>
         </SearchField>

         {!loading ? (
            <InfiniteScroll
               dataLength={data.results?.length || 0}
               next={handleNextPage}
               hasMore={data.page < data.total_pages}
               loader={<></>}>
               {data.results.length !== 0 ? (
                  <MoviesContainer>
                     {data.results.map((movie) => (
                        <MovieCard
                           key={uuidv4()}
                           movie={movie}
                        />
                     ))}
                  </MoviesContainer>
               ) : (
                  <NoContent />
               )}
            </InfiniteScroll>
         ) : (
            <Loader />
         )}
      </Container>
   );
};

export { SearchResult };
