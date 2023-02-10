import React from 'react';
import { Container } from './index.styled';

const ContentWrapper = ({children}: {children: React.ReactNode}) => {

   return (
      <Container>
         {children}
      </Container>
   );
};

export { ContentWrapper };