import styled, { keyframes } from 'styled-components';

export const skeleton = keyframes`
   0%, 100% {
      opacity: 1;
   }

   50% {
      opacity: 0.3;
   }
`;

// Section
export const Section = styled.section`
   display: inline-block;

   .title {
      height: 24px;
      width: 100px;
      margin-bottom: 20px;
      border-radius: 5px;
      background-color: var(--skeleton);
      animation: ${skeleton} 2s infinite;

      @media only screen and (max-width: 768px) {
         height: 20px;
      width: 80px;
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

export const Picture = styled.div`
   width: 175px;
   aspect-ratio: 0.5;
   background-color: var(--skeleton);
   animation: ${skeleton} 2s infinite;

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

   .name {
      height: 24px;
      width: 140px;
      border-radius: 5px;
      background-color: var(--skeleton);
      animation: ${skeleton} 2s infinite;

      @media only screen and (max-width: 768px) {
         height: 18px;
         width: 100px;
      }
   }

   .character {
      height: 24px;
      width: 120px;
      border-radius: 5px;
      background-color: var(--skeleton);
      animation: ${skeleton} 2s infinite;

      @media only screen and (max-width: 768px) {
         height: 18px;
         width: 80px;
      }
   }
`;
// ----------------------
