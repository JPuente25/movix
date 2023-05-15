import styled from 'styled-components';
import { Container } from '../../components/ContentWrapper/index.styled';

// Container
export const WrappedContainer = styled(Container)`
   color: white;
   display: flex;
   gap: 50px;
   padding: 120px 0 0 0;
   position: relative;


   @media only screen and (max-width: 768px) {
      flex-direction: column;
      padding-top: 80px;
      gap: 20px;
   }
`;

// -------------

// Background Poster
export const BackgroundPoster = styled.div`
   position: absolute;
   top: 0;
   width: 100%;
   height: 100%;
   z-index: -1;
   opacity: 0.15;

   div {
      height: 100%;
      .lazy-load-image-background {
         height: 100%;
      }
   }


`;

export const FilterBottom = styled.div`
   position: absolute;
   top: 0;
   width: 100%;
   height: 100%;
   background-image: linear-gradient(to top,var(--black) 0%, transparent 10%, transparent 100%),
                     linear-gradient(to left,var(--black) 0%, transparent 10%, transparent 100%),
                     linear-gradient(to right,var(--black) 0%, transparent 10%, transparent 100%);

`;

// ---------------------

// Poster Image
export const PosterImg = styled.figure`
   width: 350px;
   flex-shrink: 0;

   img {
      border-radius: 10px;
   }

   @media only screen and (max-width: 768px) {
      width: 100%;
   }
`;
//-------------------

// MOVIE INFO
export const MovieInfo = styled.div`
   display: flex;
   flex-direction: column;
   gap: 12px;
   margin-bottom: 30px;
`;

export const Title = styled.h2`
   font-size: 34px;
   font-weight: normal;
   margin: 0;
   @media only screen and (min-width: 768px) {
      font-size: 28px;
   }
`;

export const Tagline = styled.h4`
   font-size: 20px;
   font-weight: normal;
   font-style: italic;
   opacity: 0.5;
   margin: 0;
   @media only screen and (min-width: 768px) {
      font-size: 16px;
   }
`;

export const GenresBox = styled.div`
   display: flex;
   gap: 5px;
   margin-top: 10px;

   span {
      font-size: 12px;
      background-color: var(--pink);
      border-radius: 2px;
      padding: 2px 4px;
   }
`;
// ----------------

// Rating and Trailer
export const RatingTrailerBox = styled.div`
   display: flex;
   gap: 25px;
`;

export const Rating = styled.div`
   width: 90px;
   height: 90px;

   @media only screen and (max-width: 768px) {
      width: 70px;
      height: 70px;
   }

   .ratingCircle {
      background-color: var(--black3);

      .CircularProgressbar .CircularProgressbar-text {
         fill: white !important;
      }
   }
`;

export const Trailer = styled.div<{trailerUrl: string}>`
   display: ${props => props.trailerUrl === 'true' ? 'flex' : 'none'};
   align-items: center;
   gap: 20px;

   @media only screen and (max-width: 768px) {
      svg {
         width: 70px;
         height: 70px;
      }
   }

   .playbtn:hover ~ span {
      color: var(--pink);
   }

   span {
      font-size: 20px;
      transition: all ease 0.3s;
      cursor: pointer;

      &:hover {
         color: var(--pink);
      }
   }
`;
//------------------------------------

//Overview
export const Overview = styled.div`
   margin-top: 25px;
   span.title {
      font-size: 24px;
   }

   p.text {
      width: 80%;
      text-align: justify;
      font-size: 16px;
      font-weight: normal;
      line-height: 24px;
      margin-top: 15px;

      @media only screen and (max-width: 768px) {
         width: 100%;
      }
   }
`;
//------------------------

// Movie Info
export const DataInfo = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 20px;
   font-size: 16px;

   div {
      width: 100%;
      padding: 20px 0;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      p {
         font-weight: 700;
         span {
            font-weight: normal;
            opacity: 0.5;
         }
      }

      &.numerics p span {
         white-space: nowrap;
      }
   }

   .numerics {
      gap: 20px;
   }
`;
