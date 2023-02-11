import { ContentWrapper } from '../../components/ContentWrapper';
import { Container } from './index.styled';

const NotFound = () => {
   return (
      <Container>
         <ContentWrapper>
            <span className="bigText">404</span>
            <span className="smallText">Page not found!</span>
         </ContentWrapper>
      </Container>
   );
};

export { NotFound };
