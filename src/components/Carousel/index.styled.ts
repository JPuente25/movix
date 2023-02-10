import styled from 'styled-components';
import { Container } from '../ContentWrapper/index.styled';

export const ContentWrapper = styled(Container)`
   margin: 0;
   width: 100%;
   padding: 0;
`;

export const MovieContainer = styled.div`
   display: flex;
   overflow: scroll;
   width: 100%;
   gap: 10px;
`;

export const GenresContainer = styled.div`
   display: none;
   width: calc(100% - 10% - 40px - 5px);
   height: auto;
   position: absolute;
   bottom: 0;
   right: 0;
   flex-wrap: wrap;
   justify-content: end;

   @media only screen and (min-width: 1024px) {
      width: calc(100% - 10% - 50px - 5px);
   }

   @media only screen and (min-width: 768px) {
      display: flex;
   }
`;

export const Genre = styled.span`
   display: inline-block;
   width: fit-content;
   background-image: linear-gradient(to top, var(--pink) 0%, pink 100%);
   border-radius: 1px;
   margin: 2px;
   white-space: nowrap;
   font-size: 12px;
   color: white;
   padding: 4px;
   border-radius: 5px;
   cursor: pointer;
   transition: all ease 0.3s;
   font-weight: 700;

   &:hover {
      box-shadow: 0 0 10px white;
   }
`;
