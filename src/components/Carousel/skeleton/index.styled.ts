import styled, {keyframes} from "styled-components";
import { Container } from "../../ContentWrapper/index.styled";

export const Skeleton = keyframes`
   0%, 100% {
      opacity: 0.5
   }

   50% {
      opacity: 0.2
   }
`;

export const ContentWrapper = styled(Container)`
   display: flex;
   flex-direction: column;
   padding: 0;
`;

export const SkeletonContainer = styled.div`
   display: flex;
   overflow: scroll;
   width: 100%;
   gap: 10px;
   scrollbar-width: 0px;
   &::-webkit-scrollbar {
      display: none;
   }
`;

export const SkeletonMovie = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 125px;
   aspect-ratio: 1 /1.5;
   flex-shrink: 0;

   @media only screen and (min-width: 768px) {
      width: ${`${0.25 * window.innerWidth - 10}px`}; 
      width: 25%;
   }
`;

export const SkeletonPoster = styled.div`
   width: 100%;
   aspect-ratio: 1 / 1.5;
   border-radius: 10px;
   background-color: darkgray;
   opacity: 0.5;
   animation: ${Skeleton} 1s infinite;
`;

export const SkeletonTextBlock = styled.div`
   width: 100%;
   height: 25%;
   position: relative;
`;

export const SkeletonTitle = styled.div`
   position: absolute;
   width: 100%;
   height: 20%;
   top: 20%;
   background-color: grey;
   border-radius: 5px;
   animation: ${Skeleton} 1s 0.1s infinite;
`;

export const SkeletonDate = styled.div`
   position: absolute;
   width: 70%;
   height: 20%;
   bottom: 20%;
   background-color: grey;
   border-radius: 5px;
   animation: ${Skeleton} 1s 0.2s infinite;
`;