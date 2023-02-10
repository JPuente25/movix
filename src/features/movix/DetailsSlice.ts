import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreditsProps, DataProps, DataVideoProps, MovieProps, VideoProps } from '../../types';
import { fetchAxios } from '../../utils/api/api';

interface InitialStateProps {
   movie: MovieProps;
   credits: CreditsProps;
   videos: Array<VideoProps>;
   upcomingMovies: DataProps;
   recommendations: DataProps;
   loadingMovie: boolean;
   loadingCredits: boolean;
   loadingVideos: boolean;
   loadingUpcomingMovies: boolean;
   loadingRecommendations: boolean;
   errorMovie: any,
   errorCredits: any,
   errorVideos: any,
   errorUpcomingMovies: any,
   errorRecommendations: any,
}

const initialState: InitialStateProps = {
   movie: {} as MovieProps,
   credits: {} as CreditsProps,
   videos: [] as Array<VideoProps>,
   upcomingMovies: {} as DataProps,
   recommendations: {} as DataProps,
   loadingMovie: true,
   loadingCredits: true,
   loadingVideos: true,
   loadingUpcomingMovies: true,
   loadingRecommendations: true,
   errorMovie: null,
   errorCredits: null,
   errorVideos: null,
   errorUpcomingMovies: null,
   errorRecommendations: null,
};

export const getDetails = createAsyncThunk('movix/getDetails', async (url: string) => {
   const { data } = await fetchAxios<MovieProps>(url);
   return data;
});

export const getCredits = createAsyncThunk('movix/getCredits', async (url: string) => {
   const { data } = await fetchAxios<CreditsProps>(url);
   return data;
});

export const getVideos = createAsyncThunk('movix/getVideos', async (url: string) => {
   const { data } = await fetchAxios<DataVideoProps>(url);
   return data;
});

export const getUpcomingMovies = createAsyncThunk('movix/getUpcomingMovies', async () => {
   const { data } = await fetchAxios<DataProps>('/movie/upcoming');
   return data;
});

export const getRecommendations = createAsyncThunk(
   'movix/getRecommendations',
   async (url: string) => {
      const { data } = await fetchAxios<any>(url);
      return data;
   }
);

const DetailsSlice = createSlice({
   name: 'details',
   initialState,
   reducers: {
      unsetErrors: (state) => {
         state.errorMovie = null;
         state.errorCredits = null;
         state.errorVideos = null;
         state.errorUpcomingMovies = null;
         state.errorRecommendations = null;
      }
   },
   extraReducers: (builder) => {
      builder
         //Movie Details
         .addCase(getDetails.pending, (state, action) => {
            if (!state.loadingMovie) {
               state.loadingMovie = true;
            }
         })
         .addCase(getDetails.fulfilled, (state, action: PayloadAction<MovieProps>) => {
            if (state.loadingMovie) {
               state.movie = action.payload;
               state.loadingMovie = false;
            }
         })
         .addCase(getDetails.rejected, (state, action) => {
            state.errorMovie = action.error;
            state.loadingMovie = false;
         })

         //Movie Credits
         .addCase(getCredits.pending, (state, action) => {
            if (!state.loadingCredits) {
               state.loadingCredits = true;
            }
         })
         .addCase(getCredits.fulfilled, (state, action: PayloadAction<CreditsProps>) => {
            if (state.loadingCredits) {
               state.credits = action.payload;
               state.loadingCredits = false;
            }
         })
         .addCase(getCredits.rejected, (state, action) => {
            state.errorCredits = action.error;
            state.loadingCredits = false;
         })

         //Movie Videos
         .addCase(getVideos.pending, (state, action) => {
            if (!state.loadingVideos) {
               state.loadingVideos = true;
            }
         })
         .addCase(getVideos.fulfilled, (state, action: PayloadAction<DataVideoProps>) => {
            if (state.loadingVideos) {
               state.videos = action.payload.results;
               state.loadingVideos = false;
            }
         })
         .addCase(getVideos.rejected, (state, action) => {
            state.errorVideos = action.error;
            state.loadingVideos = false;
         })

         //Upcoming Movies
         .addCase(getUpcomingMovies.pending, (state, action) => {
            if (!state.loadingUpcomingMovies) {
               state.loadingUpcomingMovies = true;
            }
         })
         .addCase(getUpcomingMovies.fulfilled, (state, action: PayloadAction<DataProps>) => {
            if (state.loadingUpcomingMovies) {
               state.upcomingMovies = action.payload;
               state.loadingUpcomingMovies = false;
            }
         })
         .addCase(getUpcomingMovies.rejected, (state, action) => {
            state.errorUpcomingMovies = action.error;
            state.loadingUpcomingMovies = false;
         })

         //Recommendations
         .addCase(getRecommendations.pending, (state, action) => {
            if (!state.loadingRecommendations) {
               state.loadingRecommendations = true;
            }
         })
         .addCase(getRecommendations.fulfilled, (state, action: PayloadAction<DataProps>) => {
            if (state.loadingRecommendations) {
               state.recommendations = action.payload;
               state.loadingRecommendations = false;
            }
         })
         .addCase(getRecommendations.rejected, (state, action) => {
            state.errorRecommendations = action.error;
            state.loadingRecommendations = false;
         });
   },
});

export const { unsetErrors } = DetailsSlice.actions;
export default DetailsSlice.reducer;
