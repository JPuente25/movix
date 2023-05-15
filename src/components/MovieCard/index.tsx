import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { MovieProps } from '../../types';
import { BASE_IMG_URL_300 } from '../../utils/api/api';
import { GenresCarousel } from '../GenresCarousel';
import { Img } from '../Img';
import { RatingCircle } from '../RatingCircle';
import { Movie, PosterBlock, TextBlock } from './index.styled';

interface Props {
   movie: MovieProps;
   movieWidth?: number;
   selectedMedia?: string | null; //movie | tv
}

const MovieCard = ({ movie, movieWidth, selectedMedia }: Props) => {
   const navigate = useNavigate();
   const imageSrc = movie.poster_path ? BASE_IMG_URL_300 + movie.poster_path : null;

   const handleClick = (movie: MovieProps) => {
      navigate(`/details/${movie.media_type || selectedMedia}/${movie.id}`);
   };

   return (
      <Movie
         className="movie-card"
         key={movie.id}
         movieWidth={movieWidth || null}>
         <PosterBlock role='figure' onClick={() => handleClick(movie)}>
            <Img src={imageSrc} />
            <div className="rating">
               <RatingCircle rating={movie.vote_average?.toFixed(1)} />
            </div>
            <GenresCarousel data={movie.genre_ids!.slice(0, 2)} />
         </PosterBlock>

         <TextBlock>
            <span
               className="title"
               onClick={() => handleClick(movie)}>
               {movie.title || movie.name || movie.original_title}
            </span>

            <span className="date">{dayjs(movie.release_date).format('MMM D, YYYY')}</span>
         </TextBlock>
      </Movie>
   );
};

export { MovieCard };
