import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { Genre, GenresContainer } from './index.styled';

interface Props {
   data: Array<number>;
}

const GenresCarousel = ({ data }: Props) => {
   const { genres } = useAppSelector((state) => state.home);

   const genresInfo = data.map((genre) => genres.movie?.find((item) => item.id === genre));

   const handleSearchGenre = (id: number, e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      e.stopPropagation();
      console.log(id);
   };

   return (
      <GenresContainer>
         {genresInfo.map((genre) => {
            if (genre) {
               return (
                  <Genre
                     key={genre.id}
                     onClick={(e) => handleSearchGenre(genre.id, e)}
                  >
                     {genre.name}
                  </Genre>
               );
            }
            return false;
         })}
      </GenresContainer>
   );
};

export { GenresCarousel };
