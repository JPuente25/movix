import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Img } from '../../components/Img';
import { PlayIcon } from '../../components/PlayButton';
import { RatingCircle } from '../../components/RatingCircle';
import { CreditsProps, MovieProps } from '../../types';
import { BASE_IMG_URL } from '../../utils/api/api';
import {
   BackgroundPoster,
   DataInfo,
   FilterBottom,
   GenresBox,
   MovieInfo,
   Overview,
   PosterImg,
   Rating,
   RatingTrailerBox,
   Tagline,
   Title,
   Trailer,
   WrappedContainer,
} from './index.styled';
import { VideoContainer } from '../../components/VideoContainer';
import { useAppSelector } from '../../app/hooks';

interface Props {
   data: MovieProps;
   credits: CreditsProps;
}

interface MovieDetailsStates {
   trailerView: boolean;
}

const MovieDetails = ({ data, credits }: Props) => {
   const [trailerView, setTrailerView] = useState<MovieDetailsStates['trailerView']>(false);
   const moviePoster = data.poster_path ? BASE_IMG_URL + data.poster_path : null;

   const movieTitle = data.title || data.name || data.original_title;
   const releaseYear = dayjs(data.release_date).format('YYYY');
   const releaseDate = dayjs(data.release_date).format('MMM DD, YYYY');
   const movieDirectors = credits.crew
      .filter((crew) => crew.job === 'Director')
      .map((crew) => crew.name);
   const movieWriters = credits.crew
      .filter((crew) => crew.department === 'Writing')
      .map((crew) => crew.name);
   const { videos } = useAppSelector((state) => state.details);

   const trailer = videos?.find((video) => video.type.toLowerCase() === 'trailer');
   const trailerUrl = trailer?.key ? `https://www.youtube.com/embed/${trailer.key}` : undefined;

   const toggleTrailerView = () => {
      setTrailerView((prev) => !prev);
   };

   return (
      <WrappedContainer className="movieDetails">
         {trailerUrl && trailerView && (
            <VideoContainer
               videoUrl={trailerUrl}
               toggleVideoView={toggleTrailerView}
            />
         )}

         <BackgroundPoster className="backgroundPoster">
            <Img src={moviePoster} />
            <FilterBottom className="filter"></FilterBottom>
         </BackgroundPoster>

         <PosterImg className="Picture">
            <Img src={moviePoster} />
         </PosterImg>

         <div className="description">
            <MovieInfo>
               <Title className="title">{`${movieTitle} (${releaseYear})`}</Title>
               <Tagline className="tagline">{data.tagline}</Tagline>
               <GenresBox>
                  {data.genres?.map((genre) => (
                     <span key={genre.id}>{genre.name}</span>
                  ))}
               </GenresBox>
            </MovieInfo>

            <RatingTrailerBox className="ratingTrailer">
               <Rating className="rating">
                  <RatingCircle rating={data.vote_average.toFixed(1)} />
               </Rating>

               <Trailer className="trailer" trailerUrl={trailerUrl ? 'true' : 'false'}>
                  <PlayIcon toggleVideoView={toggleTrailerView} />
                  <span onClick={toggleTrailerView}>Watch Trailer</span>
               </Trailer>
            </RatingTrailerBox>

            <Overview className="overview">
               <span className="title">Overview</span>
               <p className="text">{data.overview}</p>
            </Overview>

            <DataInfo className="dataInfo">
               <div className="numerics">
                  <p>
                     Status: <span>{data.status}</span>
                  </p>
                  <p>
                     Release Date: <span>{releaseDate}</span>
                  </p>
                  <p>
                     Runtime: <span>{data.runtime} min.</span>
                  </p>
               </div>

               <div className="director">
                  <p>
                     Director: <span>{movieDirectors.join(', ')}</span>
                  </p>
               </div>

               <div className="writer">
                  <p>
                     Writers: <span>{movieWriters.join(', ')}</span>
                  </p>
               </div>
            </DataInfo>
         </div>
      </WrappedContainer>
   );
};

export { MovieDetails };
