import styled from 'styled-components';

export const Play = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;
   cursor: pointer;

   svg {
      width: 60px;
      @media only screen and (min-width: 768px) {
         width: 80px;
      }
   }
   .text {
      font-size: 20px;
      transition: all 0.7s ease-in-out;
   }
   .triangle {
      stroke-dasharray: 240;
      stroke-dashoffset: 480;
      stroke: white;
      transform: translateY(0);
      transition: all 0.7s ease-in-out;
   }
   .circle {
      stroke: white;
      stroke-dasharray: 650;
      stroke-dashoffset: 1300;
      transition: all 0.5s ease-in-out;
   }
   &:hover {
      .text {
         color: var(--pink);
      }
      .triangle {
         stroke-dashoffset: 0;
         opacity: 1;
         stroke: var(--pink);
      }
      .circle {
         stroke-dashoffset: 0;
         stroke: var(--pink);
      }
   }
`;
