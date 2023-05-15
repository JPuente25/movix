import styled from 'styled-components';

const Box = styled.div`
   color: white;
   opacity: 0.5;
   font-size: 24px;
   font-weight: 700;
   width: 100%;
   aspect-ratio: 6;
   display: grid;
   place-items: center;
   background-color: var(--black3);
`;


const SomethingWrong = () => {

   return (
      <Box>
         <span>Something is going wrong...</span>
      </Box>
   );
};

export { SomethingWrong };
