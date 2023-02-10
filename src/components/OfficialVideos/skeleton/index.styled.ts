import styled from 'styled-components';
import { Container } from '../../ContentWrapper/index.styled';
import { skeleton } from '../../CastCarousel/skeleton/index.styled';

// Container
export const ContentWrapper = styled(Container)`
   padding: 0;
   .title {
      height: 24px;
      width: 120px;
      border-radius: 5px;
      margin-bottom: 20px;
      background-color: var(--skeleton);
      animation: ${skeleton} 2s infinite;
   }
`;
// --------------

//Card Container
export const CardContainer = styled.div`
   display: flex;
   gap: 20px;
   overflow: scroll;
`;

//---------

// Video Card
export const VideoCard = styled.div`
   width: min-content;
   display: flex;
   flex-direction: column;
   gap: 20px;

   span {
      width: 80%;
      height: 20px;
      border-radius: 5px;
      background-color: var(--skeleton);
      animation: ${skeleton} 2s infinite;
   }
`;
// --------------------

// Image and Play button
export const VideoPlay = styled.div`
   position: relative;
   width: 290px;
   height: 145px;
   border-radius: 10px;
   background-color: var(--skeleton);
   animation: ${skeleton} 2s infinite;
`;
// ----------------------
