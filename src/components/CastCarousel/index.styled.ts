import styled from 'styled-components';
// Section

export const Section = styled.section`
   display: inline-block;

   h1 {
      font-size: 24px;
      color: white;
      font-weight: normal;
      margin-bottom: 20px;

      @media only screen and (max-width: 768px) {
         font-size: 20px;
      }
   }
`;

// Crew Container
export const Container = styled.div`
   display: flex;
   height: 250px;
   align-items: start;
   overflow: scroll;
   gap: 20px;

   @media only screen and (min-width: 768px) {
      height: 325px;
   }

`;

// Crew people
export const CrewCard = styled.div`
   width: 125px;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   @media only screen and (min-width: 768px) {
      width: 175px;
   }
`;

export const Picture = styled.div`
   width: 175px;
   height: 80%;

   img {
   border-radius: 10px;
   }

   @media only screen and (max-width: 768px) {
      width: 125px;
   }
`;

export const CrewInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 5px;
   color: white;
   text-align: center;

   .name {
      font-size: 18px;
      font-weight: bold;

      @media only screen and (max-width: 768px) {
         font-size: 16px;
      }
   }

   .character {
      font-size: 16px;
      font-weight: normal;
      opacity: 0.5;
      @media only screen and (max-width: 768px) {
         font-size: 14px;
      }
   }
`;
// ----------------------
