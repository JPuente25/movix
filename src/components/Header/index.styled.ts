import styled, { keyframes } from 'styled-components';
import { Container } from '../ContentWrapper/index.styled';
import { SearchField } from '../../containers/HeroBanner/index.styled';

interface Props {
   mobileMenu?: string;
   show?: string;
}

const KeyframesMobileMenu = keyframes`
   0% {
      transform: translateY(-130%);
    }
    100% {
      transform: translateY(0);
    }
`;

export const StyledHeader = styled.header<Props>`
   position: fixed;
   transform: translateY(0);
   width: 100%;
   z-index: 2;
   display: flex;
   align-items: center;
   transition: all ease 0.5s;

   ${(props) =>
      props.show === 'top'
         ? `background-color: rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(3.5px);
            -webkit-backdrop-filter: blur(3.5px);`
         : props.show === 'show'
            ? `background-color: var(--black3);`
            : `transform: translateY(-60px);`}

   background-color: ${(props) => props.mobileMenu === 'true' && 'var(--black3)'};
`;

export const StyledContentWrapper = styled(Container)`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const Logo = styled.div`
   cursor: pointer;

   img {
      height: 50px;
   }
`;

export const MenuItemContainer = styled.ul<Props>`
   list-style: none;
   display: ${(props) => (props.mobileMenu === 'true' ? 'flex' : 'none')};
   align-items: center;
   animation: ${KeyframesMobileMenu} 0.3s ease forwards;

   @media only screen and (min-width: 768px) {
      display: flex;
      gap: 15px;
   }

   ${(props) =>
      props.mobileMenu === 'true'
         ? `
         position: absolute;
         top: 60px;
         left: 0;
         background: var(--black3);
         flex-direction: column;
         width: 100%;
         padding: 20px 0;
         border-top: 1px solid rgba(255, 255, 255, 0.1);

         svg {
            font-size: 18px;
         }

         @media only screen and (min-width: 768px) {
            display: none;
         }
      `
         : `
            animation: none;
         `}
   li {
      display: flex;
      flex-direction: row;
      height: 60px;
      align-items: center;
      color: white;
      font-weight: 500;
      position: relative;
      cursor: pointer;

      &:hover {
         color: var(--pink);
      }

      ${(props) =>
         props.mobileMenu === 'true'
            ? `
         font-size: 20px;
         width: 100%;
         height: auto;
         padding: 15px 20px;
         margin: 0;
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         &:last-child {
            display: none;
         }
         `
            : ``};
   }
`;

export const MobileMenu = styled.div`
   display: flex;
   gap: 20px;
   color: white;
   font-size: 18px;
   font-weight: 500;

   @media only screen and (min-width: 768px) {
      display: none;
   }

   svg {
      cursor: pointer;
   }
`;

export const StyledSearchField = styled(SearchField)`
   width: 100%;
   height: 60px;
   background-color: white;
   position: absolute;
   top: 60px;
   animation: ${KeyframesMobileMenu} 0.3s ease forwards;
   z-index: 1;

   input {
      width: 100%;

      @media only screen and (min-width: 768px) {
         height: 60px;
         font-size: 20px;
         padding: 0 30px;
      }
   }

   svg {
      font-size: 20px;
      cursor: pointer;
   }
`;
