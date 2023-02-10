import styled, { keyframes } from 'styled-components';

export const show = keyframes`
   0% {
      transform: scale(0);
   }

   100% {
      transform: scale(1);
   }
`;

export const Loading = keyframes`
   0%, 100% {
      background-color: black;
   }

   50% {
   background-color: var(--black3);
}
`;

export const Container = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   backdrop-filter: blur(6px);
   z-index: 10;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   animation: ${show} 500ms;

   iframe {
      border-radius: 10px;
      border: none;
      outline: 0;
      width: 70%;
      height: 30%;
      animation: ${Loading} infinite 2s;

      @media only screen and (min-width: 768px) {
         width: 80%;
         height: 50%;
      }

      @media only screen and (min-width: 1024px) {
         width: 80%;
         height: 70%;
      }
   }

   svg {
      cursor: pointer;
      color: white;
      height: 30px;
      width: 30px;
      margin-left: calc(70% - 15px);

      @media only screen and (min-width: 768px) {
         margin-left: calc(80% - 15px);
      }
   }
`;
