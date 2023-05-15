import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { DataProps } from '../../types';
import { MoviesContainer } from '../Explore/index.styled';
import { MovieCard } from '../../components/MovieCard';
import { Container } from './index.styled';
import { Loader } from './Loader';
import { NoContent } from '../../components/NoContent';
import { unsetErrors } from '../../features/movix/DetailsSlice';
import { useAppDispatch } from '../../app/hooks';
import { SearchField } from '../../containers/HeroBanner/index.styled';
import fetchInitialData from './functions/fetchInitialData';
import fetchNextPageData from './functions/fetchNextPageData';
import { getGenres } from '../../features/movix/HomeSlice';

interface SearchStates {
   data: DataProps;
   loading: boolean;
}

const SearchResult = () => {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const location = useLocation();
   const params = useParams();
   const paramsQuery = params.query!;
   const [data, setData] = useState<SearchStates['data']>({} as DataProps);
   const [loading, setLoading] = useState<SearchStates['loading']>(true);
   let searchQuery = '';

   const handleNextPage = async () => {
      const res = await fetchNextPageData({
         query: paramsQuery,
         page: data.page + 1,
      });
      setData({
         ...res!,
         results: [...data.results, ...res!.results],
      });
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (searchQuery !== '') {
         navigate(`/search/${searchQuery}`);
         setLoading(true);
      }
   };

   useEffect(() => {
      const fetchData = async () => {
         const res = await fetchInitialData(paramsQuery);
         if (res) {
            setData(res);
            setLoading(false);
         }
      };
      fetchData();
   }, [params]);

   useEffect(() => {
      dispatch(unsetErrors());
   }, [location]);

   useEffect(() => {
      dispatch(getGenres());
   }, []);

   console.log(data.results ? `Data: ${data.results.length}` : `Data: 0`);
   // console.log(loading)

   return (
      <Container>
         <SearchField onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder={paramsQuery}
               onChange={({ target }) => (searchQuery = target.value)}
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
                  <MoviesContainer role="contentinfo">
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
