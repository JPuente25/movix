import styled from "styled-components";

export const Movie = styled.div<{movieWidth: number | null}>`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 125px;
   flex-shrink: 0;

   @media only screen and (min-width: 768px) {
      width: ${props => props.movieWidth 
      ? `${0.25 * (props.movieWidth - 20) - 10 + 0.1}px`
      : `125px;`};
      flex-shrink: 0;
   }
`;

export const PosterBlock = styled.div`
   position: relative;
   width: 100%;
   border-radius: 10px;
   margin-bottom: 25px;
   cursor: pointer;

   .lazy-load-image-background {
      img {
         border-radius: 10px;
      }
   }

   .rating {
      position: absolute;
      bottom: -10px;
      left: 10%;
      width: 40px;
      height: 40px;
      
      .ratingCircle {
         z-index: 5;

         @media only screen and (min-width: 1024px) {
            width: 50px;
            height: 50px;
         }
      }
   }

`;

export const TextBlock = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: start;
   height: 100%;
   color: white;

   .title {
      font-size: 16px;
      margin-bottom: 10px;
      line-height: 24px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
         color: var(--pink);
      }

      @media only screen and (min-width: 1024px) {
         font-size: 20px;
      }
   }

   .date {
      font-size: 14px;
      opacity: 0.5;

      @media only screen and (min-width: 1024px) {
         font-size: 18px;
      }
   }
`;