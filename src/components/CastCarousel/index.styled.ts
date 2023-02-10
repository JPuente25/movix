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
   align-items: center;
   overflow: scroll;
   gap: 20px;
`;

// Crew people
export const CrewCard = styled.div`
   width: 175px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 30px;
   @media only screen and (max-width: 768px) {
      width: 125px;
   }
`;

export const Picture = styled.figure`
   width: 175px;
   height: 175px;
   border-radius: 50%;
   contain: content;

   @media only screen and (max-width: 768px) {
      width: 125px;
      height: 125px;
   }
`;

export const CrewInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 5px;
   color: white;

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
