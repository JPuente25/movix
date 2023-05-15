import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import { ImgContainer } from './index.styled';
import PosterNotFound from '../../assets/no-poster.png';

const Img = ({src}: {src: string | null}) => {
   return (
      <ImgContainer>
         <LazyLoadImage 
            className="Img"
            alt={src ? 'movie/cast-picture' : 'no-image-found'}
            effect="black-and-white"
            src={src || PosterNotFound}
         />
      </ImgContainer>
   );
};

export { Img };