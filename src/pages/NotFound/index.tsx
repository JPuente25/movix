import { ContentWrapper } from '../../components/ContentWrapper';
import { Container } from './index.styled';

interface Props {
   type: string;
}

const NotFound = ({type}: Props) => {
   return (
      <Container>
         <ContentWrapper>
            <span className="bigText">404</span>
            <span className="smallText">
               {type === 'page' ? 'Page not found!' : 'This movie or TV Show is not available'}
            </span>
         </ContentWrapper>
      </Container>
   );
};

export { NotFound };
