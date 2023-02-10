import styled from 'styled-components';
import { skeleton } from '../../../components/CastCarousel/skeleton/index.styled';
import { Container } from '../../../components/ContentWrapper/index.styled';

// Container
export const WrappedContainer = styled(Container)`
   color: white;
   display: flex;
   gap: 50px;
   padding: 120px 0 0 0;
   position: relative;

   .description {
      width: 100%;
   }

   @media only screen and (max-width: 768px) {
      flex-direction: column;
      padding-top: 80px;
      gap: 20px;
   }
`;

// -------------

// Poster Image
export const PosterImg = styled.figure`
   width: 350px;
   aspect-ratio: 1/1.5;
   border-radius: 10px;
   flex-shrink: 0;
   background-color: var(--skeleton);
   animation: ${skeleton} infinite 1s;

   @media only screen and (max-width: 768px) {
      width: 100%;
      aspect-ratio: 4/5;
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

export const Title = styled.div`
   height: 34px;
   width: 200px;
   border-radius: 5px;
   background-color: var(--skeleton);
   animation: ${skeleton} infinite 1s;

   @media only screen and (min-width: 768px) {
      height: 28px;
   }
`;

export const Tagline = styled.div`
   height: 20px;
   width: 150px;
   border-radius: 5px;
   background-color: var(--skeleton);
   animation: ${skeleton} infinite 1s;

   @media only screen and (min-width: 768px) {
      height: 16px;
   }
`;

// Rating and Trailer
export const RatingTrailerBox = styled.div`
   display: flex;
   gap: 25px;
`;

export const Rating = styled.div`
   width: 90px;
   height: 90px;
   border-radius: 50%;
   background-color: var(--skeleton);
   animation: ${skeleton} infinite 1s;

   @media only screen and (max-width: 768px) {
      width: 70px;
      height: 70px;
   }
`;

export const Trailer = styled.div`
   width: 200px;
   height: 90px;
   border-radius: 5px;
   background-color: var(--skeleton);
   animation: ${skeleton} infinite 1s;

   @media only screen and (max-width: 768px) {
      height: 70px;
   }
`;
//------------------------------------

//Overview
export const Overview = styled.div`
   margin-top: 25px;

   p.title {
      height: 24px;
      width: 200px;
      background-color: var(--skeleton);
      animation: ${skeleton} infinite 1s;

      border-radius: 5px;
   }

   p.text {
      width: 80%;
      height: 16px;
      margin-top: 15px;
      background-color: var(--skeleton);
      animation: ${skeleton} infinite 1s;

      border-radius: 5px;

      &:nth-child(2) {
         width: 100%;
      }

      &:nth-child(4) {
         width: 95%;
      }
   }
`;
//------------------------

// Movie Info
export const DataInfo = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 20px;

   div {
      width: 100%;
      padding: 20px 0;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      span {
         height: 16px;
         width: 100%;
         background-color: var(--skeleton);
         animation: ${skeleton} infinite 1s;

         border-radius: 5px;
      }
   }

   .numerics {
      gap: 20px;
   }
`;
