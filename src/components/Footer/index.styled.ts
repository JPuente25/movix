import styled from 'styled-components';
import { Container } from '../ContentWrapper/index.styled';

export const StyledFooter = styled.footer`
   background-color: var(--black3);
   padding: 50px;
   color: white;
`;

export const ContentWrapper = styled(Container)`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const MenuItemContainer = styled.ul`
   list-style: none;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 15px;
   margin-bottom: 20px;

   @media only screen and (min-width: 768px) {
      margin-bottom: 30px;
      gap: 30px;
   }
`;

export const MenuItem = styled.li`
   cursor: pointer;
   font-size: 12px;
   transition: all ease 0.3s;

   @media only screen and (min-width: 768px) {
      font-size: 16px;
   }

   &:hover {
      color: var(--pink);
   }
`;

export const InfoText = styled.div`
   font-size: 12px;
   line-height: 20px;
   opacity: 0.5;
   text-align: center;
   max-width: 800px; 
   margin-bottom: 20px;

   @media only screen and (min-width: 768px) {
      font-size: 14px;
      margin-bottom: 30px;
   }   
`;

export const SocialIcons = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;
`;

export const Icon = styled.span`
   width: 50px;
   height: 50px;
   border-radius: 50px;
   background-color: var(--black);
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   transition: all ease 0.3s;

   &:hover {
      box-shadow: 0 0 12px var(--pink);
      color: var(--pink);
   }
`;
