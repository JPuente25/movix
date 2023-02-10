import styled from 'styled-components';
import { Container as WrappedCont } from '../../components/ContentWrapper/index.styled';

export const WrappedContainer = styled(WrappedCont)`
   display: flex;
   flex-direction: column;
   gap: 60px;
   z-index: 2;
   padding-top: 60px;
   padding-bottom: 60px;
`;
