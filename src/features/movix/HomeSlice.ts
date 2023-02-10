import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { DataProps, Genres, GenresProps } from '../../types';
import { fetchAxios } from '../../utils/api/api';

interface initialStateProps {
   popularMovies: DataProps;
   trendingMovies: DataProps;
   genres: Genres;
   topRatedMovies: DataProps;
   loadingPopular: boolean;
   loadingTrending: boolean;
   loadingGenres: boolean;
   loadingTopRated: boolean;
   error: any;
}

const initialState: initialStateProps = {
   popularMovies: {} as DataProps,
   trendingMovies: {} as DataProps,
   genres: {} as Genres,
   topRatedMovies: {} as DataProps,
   loadingGenres: true,
   loadingPopular: true,
   loadingTrending: true,
   loadingTopRated: true,
   error: null,
};

export const getPopularMovies = createAsyncThunk('movix/getPopularMovies', async (url: string) => {
   const { data } = await fetchAxios<DataProps>(url);
   return data;
});

export const getTrendingMovies = createAsyncThunk(
   'movix/getTrendingMovies',
   async (url: string) => {
      const { data } = await fetchAxios<DataProps>(url);
      return data;
   }
);

export const getGenres = createAsyncThunk('movix/getGenres', async () => {
   const { data: dataMovie } = await fetchAxios<GenresProps>('/genre/movie/list');
   const { data: dataTV } = await fetchAxios<GenresProps>('/genre/tv/list');
   return { dataMovie, dataTV };
});

export const getTopRatedMovies = createAsyncThunk(
   'movix/getTopRatedMovies',
   async (url: string) => {
      const { data } = await fetchAxios<DataProps>(url);
      return data;
   }
);

export const homeSlice = createSlice({
   name: 'home',
   initialState,
   reducers: {
      setPopularMovies: (state, action: PayloadAction<DataProps>) => {
         state.popularMovies = action.payload;
      },
      setGenres: (state, action) => {
         state.genres = action.payload;
      },
      setTrendingMovies: (state, action: PayloadAction<DataProps>) => {
         state.trendingMovies = action.payload;
      },
   },

   extraReducers: (builder) => {
      builder
         //Popular Movies
         .addCase(getPopularMovies.pending, (state, action) => {
            if (!state.loadingPopular) {
               state.loadingPopular = true;
            }
         })
         .addCase(getPopularMovies.fulfilled, (state, action: PayloadAction<DataProps>) => {
            if (state.loadingPopular) {
               state.popularMovies = action.payload;
               state.loadingPopular = false;
            }
         })
         .addCase(getPopularMovies.rejected, (state, action) => {
            if (state.loadingPopular) {
               state.loadingPopular = false;
               state.error = action.error;
            }
         })

         // Trending Movies
         .addCase(getTrendingMovies.pending, (state) => {
            if (!state.loadingTrending) {
               state.loadingTrending = true;
            }
         })
         .addCase(getTrendingMovies.fulfilled, (state, action: PayloadAction<DataProps>) => {
            if (state.loadingTrending) {
               state.trendingMovies = action.payload;
               state.loadingTrending = false;
            }
         })
         .addCase(getTrendingMovies.rejected, (state, action) => {
            if (state.loadingTrending) {
               state.loadingTrending = false;
               state.error = action.error;
            }
         })

         // Genres
         .addCase(getGenres.pending, (state) => {
            if (!state.loadingGenres) {
               state.loadingGenres = true;
            }
         })
         .addCase(
            getGenres.fulfilled,
            (state, action: PayloadAction<{ dataTV: GenresProps; dataMovie: GenresProps }>) => {
               if (state.loadingGenres) {
                  state.genres.movie = action.payload.dataMovie.genres;
                  state.genres.tv = action.payload.dataTV.genres;
                  state.loadingGenres = false;
               }
            }
         )
         .addCase(getGenres.rejected, (state, action) => {
            if (state.loadingGenres) {
               state.loadingGenres = false;
               state.error = action.error;
            }
         })

         //Top Rated Movies
         .addCase(getTopRatedMovies.pending, (state, action) => {
            if (!state.loadingTopRated) {
               state.loadingTopRated = true;
            }
         })
         .addCase(getTopRatedMovies.fulfilled, (state, action: PayloadAction<DataProps>) => {
            if (state.loadingTopRated) {
               state.topRatedMovies = action.payload;
               state.loadingTopRated = false;
            }
         })
         .addCase(getTopRatedMovies.rejected, (state, action) => {
            if (state.loadingTopRated) {
               state.loadingTopRated = false;
               state.error = action.error;
            }
         });
   },
});

export const { setPopularMovies, setGenres, setTrendingMovies } = homeSlice.actions;
export default homeSlice.reducer;
