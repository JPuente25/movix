import React from 'react';
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


const NoContent = () => {

   return (
      <Box>
         <span>There is not content to show!</span>
      </Box>
   );
};

export { NoContent };