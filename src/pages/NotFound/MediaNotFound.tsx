import { ContentWrapper } from '../../components/ContentWrapper';
import { Container } from './index.styled';

const MediaNotFound = () => {
   return (
      <Container>
         <ContentWrapper>
            <span className="bigText">404</span>
            <span className="smallText">This movie or TV Show is not available</span>
         </ContentWrapper>
      </Container>
   );
};

export { MediaNotFound };