import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { ContentWrapper } from '../../components/ContentWrapper';
import { unsetErrors } from '../../features/movix/DetailsSlice';
import { Container } from './index.styled';

const NotFound = () => {
   const location = useLocation();
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(unsetErrors());
   }, [location]);

   return (
      <Container>
         <ContentWrapper>
            <span className="bigText">404</span>
            <span className="smallText">Page not found!</span>
            <span className="smallText">The content you are looking for isn't available</span>
         </ContentWrapper>
      </Container>
   );
};

export { NotFound };
