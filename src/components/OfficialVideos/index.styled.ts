import styled from 'styled-components';
import { Container } from '../ContentWrapper/index.styled';

// Container
export const ContentWrapper = styled(Container)`
   padding: 0;
   .title {
      font-size: 24px;
      color: white;
      font-weight: normal;
      margin-bottom: 20px;
   }
`;
// --------------

//Card Container
export const CardContainer = styled.div`
   display: flex;
   gap: 20px;
   overflow: scroll;
   overflow-y: hidden;

   &::-webkit-scrollbar {
      display: none;
   }
`;

//---------

// Video Card
export const VideoCard = styled.div`
   width: min-content;
   display: flex;
   flex-direction: column;
   gap: 20px;

   span {
      color: white;
      text-align: justify;
      line-height: 1.5;
   }
`;
// --------------------

// Image and Play button
export const VideoPlay = styled.div`
   position: relative;
   width: 290px;
`;

export const VideoImage = styled.figure`
   overflow: hidden;
   width: 100%;
   height: 100%;

   div {
      aspect-ratio: 2;
      .lazy-load-image-background {
         aspect-ratio: 2;
      }
   }
   img {
      border-radius: 10px;
   }
   .playicon {
      svg {
         width: 50px;
         height: 50px;
      }
      position: absolute;
      top: calc(50% - 25px);
      left: calc(50% - 25px);
   }
`;
// ----------------------
