import React, { useState, useLayoutEffect, useEffect } from 'react';
import _ from 'underscore';
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';
import makeAnimated from 'react-select/animated';
import { useLocation, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Container, MoviesContainer, SelectContainer, Title, ToolsContainer } from './index.styled';
import { getGenres } from '../../features/movix/HomeSlice';
import { MultiValue } from 'react-select/dist/declarations/src/types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { DataProps } from '../../types';
import { MovieCard } from '../../components/MovieCard';
import { fetchAxios } from '../../utils/api/api';
import { Loader } from '../SearchResult/Loader';
import { MediaNotFound } from '../NotFound/MediaNotFound';
import { unsetErrors } from '../../features/movix/DetailsSlice';


const sortOptions = [
   { label: 'Most Populars', value: 'popularity.desc' },
   { label: 'Less Populars', value: 'popularity.asc' },
   { label: 'Oldest', value: 'release_date.asc' },
   { label: 'Newest', value: 'release_date.desc' },
   { label: 'More Revenue', value: 'revenue.asc' },
   { label: 'Less revenue', value: 'revenue.desc' },
   { label: 'Title (From A to Z)', value: 'original_title.asc' },
   { label: 'Title (From Z to A)', value: 'original_title.desc' },
   { label: 'Most Voted', value: 'vote_average.asc' },
   { label: 'Less Voted', value: 'vote_average.desc' },
];

interface ValuesNumber {
   label: string;
   value: number;
}

interface ValuesString {
   label: string;
   value: string;
}

interface ExploreState {
   sort: ValuesString;
   selectedGenres: Array<number>;
   movies: DataProps;
   loading: boolean;
   page: number;
}

const Explore = () => {
   const location = useLocation();
   const dispatch = useAppDispatch();
   const { genres } = useAppSelector((state) => state.home);
   const params = useParams();
   const mediaType = params.mediaType!;
   
   const [sort, setSort] = useState<ExploreState['sort']>(sortOptions[0]);
   const [selectedGenres, setSelectedGenres] = useState<ExploreState['selectedGenres']>([]);
   const [movies, setMovies] = useState<ExploreState['movies']>({} as DataProps);
   const [loading, setLoading] = useState<ExploreState['loading']>(true);
   const [page, setPage] = useState<number>(1);
   


   const genresOptions = genres[mediaType as keyof typeof genres]?.map(
      (genre: { id: number; name: string }) => ({ label: genre.name, value: genre.id })
   );

   const handleSort = (e: unknown) => {
      setSort({
         label: (e as ValuesString).label,
         value: (e as ValuesString).value,
      });
   };

   const handleGenre = (e: MultiValue<unknown>) => {
      setSelectedGenres(e.map((item) => (item as ValuesNumber).value));
   };

   const fetchInitialData = async () => {
      try {
         const { data, status } = await fetchAxios<DataProps>({
            url: `discover/${mediaType}`,
            params: {
               sort_by: sort.value,
               with_genres: selectedGenres.join(', '),
               page: 1,
            },
         });

         if (status >= 200 && status < 300) {
            setMovies({
               page: data.page,
               results: [...data.results],
               total_results: data.total_results,
               total_pages: data.total_pages,
            });
            setPage(2);
            setLoading(false);
         }
      } catch (e: any) {
         console.log(e);
      }
   };

   const fetchNextPageData = async () => {
      try {
         const { data, status } = await fetchAxios<DataProps>({
            url: `discover/${mediaType}`,
            params: {
               sort_by: sort.value,
               with_genres: selectedGenres,
               page: page,
            },
         });

         if (status >= 200 && status < 300) {
            setMovies({
               page: data.page,
               results: [...movies.results, ...data.results],
               total_results: data.total_results,
               total_pages: data.total_pages,
            });
            setPage(data.page + 1);
         }
      } catch (e: any) {
         console.log(e);
      }
   };

   const handleNextPage = () => {
      const throttleFetch = _.throttle(() => {fetchNextPageData()}, 3000);
      throttleFetch();
   }

   useLayoutEffect(() => {
      dispatch(getGenres());
      fetchInitialData();
      window.scrollTo(0, 0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [sort, selectedGenres, params]);

   useEffect(() => {
      dispatch(unsetErrors());
   }, [location]);

   if (mediaType !== 'movie' && mediaType !== 'tv') {
      return <MediaNotFound />
   }

   return (
      <Container>
         <ToolsContainer>
            <Title className="title">Explore {mediaType === 'tv' ? "TV Shows" : "Movies"}</Title>
            <SelectContainer>
               <Select
                  options={sortOptions}
                  placeholder="Sort by"
                  components={makeAnimated()}
                  classNamePrefix="select"
                  onChange={handleSort}
               />

               <Select
                  options={genresOptions}
                  isMulti
                  placeholder="Select genres"
                  components={makeAnimated()}
                  classNamePrefix="select"
                  onChange={handleGenre}
               />
            </SelectContainer>
         </ToolsContainer>

         {!loading ? (
            <InfiniteScroll
               dataLength={movies.results?.length || 0}
               next={handleNextPage}
               hasMore={movies.page < movies.total_pages}
               loader={<></>}
            >
               <MoviesContainer>
                  {movies.results.map((movie) => (
                     <MovieCard
                        key={uuidv4()}
                        movie={movie}
                        selectedMedia={mediaType}
                     />
                  ))}
               </MoviesContainer>
            </InfiniteScroll>
         )
      : <Loader />}
      </Container>
   );
};


export { Explore };
