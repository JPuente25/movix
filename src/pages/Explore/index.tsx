import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLocation, useParams } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { MultiValue } from 'react-select/dist/declarations/src/types';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { MovieCard } from '../../components/MovieCard';
import { NoContent } from '../../components/NoContent';
import { unsetErrors } from '../../features/movix/DetailsSlice';
import { getGenres } from '../../features/movix/HomeSlice';
import { DataProps } from '../../types';
import { NotFound } from '../NotFound';
import { Loader } from '../SearchResult/Loader';
import fetchData from './functions/fetchData';
import { Container, MoviesContainer, SelectContainer, Title, ToolsContainer } from './index.styled';

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

   const handleNextPage = async () => {
      const data = await fetchData({
         sort: sort.value,
         selectedGenres: selectedGenres,
         mediaType: mediaType,
         page: movies.page + 1,
      });
      if (data.results) {
         setMovies({
            ...movies,
            results: [...movies.results, ...data!.results],
            page: movies.page + 1,
         });
      }
   };

   useEffect(() => {
      setLoading(true);
      window.scrollTo(0, 0);
      const fetchInitialData = async () => {
         const data = await fetchData({
            sort: sort.value,
            selectedGenres: selectedGenres,
            mediaType: mediaType,
            page: 1,
         });
         if (data?.results) {
            setMovies(data);
            setLoading(false);
         }
      };
      fetchInitialData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [sort, selectedGenres, params]);

   useEffect(() => {
      dispatch(unsetErrors());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [location]);

   useEffect(() => {
      dispatch(getGenres());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   // console.log(movies.results);

   if (mediaType !== 'movie' && mediaType !== 'tv') {
      return <NotFound type="media" />;
   } else {
      return (
         <Container>
            <ToolsContainer>
               <Title className="title">Explore {mediaType === 'tv' ? 'TV Shows' : 'Movies'}</Title>
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
                  loader={<></>}>
                     {movies.results.length !== 0
                     ? <MoviesContainer role="contentinfo">
                     {movies.results.map((movie) => (
                        <MovieCard
                           key={uuidv4()}
                           movie={movie}
                           selectedMedia={mediaType}
                        />
                     ))}
                  </MoviesContainer>
                  : <NoContent />}
               </InfiniteScroll>
            ) : (
               <Loader />
            )}
         </Container>
      );
   }
};

export { Explore };

