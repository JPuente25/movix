import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getGenres } from '../../features/movix/HomeSlice';
import { Genre, GenresContainer } from './index.styled';

interface Props {
   data: Array<number>;
}

const GenresCarousel = ({ data }: Props) => {
   const { genres } = useAppSelector((state) => state.home);
   const genresInfo = data.map((genre) => genres.movie?.find((item) => item.id === genre));

   return (
      <GenresContainer>
         {genresInfo.map((genre) => {
            if (genre) {
               return <Genre role='listitem' key={genre.id}>{genre.name}</Genre>;
            }
            return genre;
         })}
      </GenresContainer>
   );
};

export { GenresCarousel };
