import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100%;
   background-color: white;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 2px;

   .CircularProgressbar-path {
      stroke-width: 9px;
   }
   .CircularProgressbar-trail {
      stroke: transparent !important;
   }
   .CircularProgressbar-text {
      font-size: 34px !important;
      font-weight: 700 !important;
      fill: var(--black) !important;
   }
`;
