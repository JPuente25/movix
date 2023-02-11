import styled, { keyframes } from 'styled-components';

export const Loader = () => {
   return (
      <Container>
         <div></div>
         <div></div>
         <div></div>
      </Container>
   );
};

export const Scale = keyframes`
0%, 50%, 100% {
   transform: scale(1);
   opacity: 0.15;

}

25% {
   transform: scale(1.5);
   opacity: 1;
}
`;

export const Container = styled.div`
   display: flex;
   gap: 40px;
   width: 100%;
   aspect-ratio: 1.5 / 1;
   justify-content: center;
   align-items: center;
   div {
      width: 20px;
      height: 20px;
      background-color: white;
      border-radius: 50%;

      
      &:nth-child(1) {
         animation: ${Scale} 1.5s infinite 0s;
      }

      &:nth-child(2) {
         animation: ${Scale} 1.5s infinite 0.3s;
      }

      
      &:nth-child(3) {
         animation: ${Scale} 1.5s infinite 0.6s;
      }
   }

`;
