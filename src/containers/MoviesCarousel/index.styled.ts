import styled from 'styled-components';
import { Container } from '../../components/ContentWrapper/index.styled';

export const CarouselSection = styled.section`
   position: relative;
   margin-bottom: 70px;
   width: 100%;
   max-width: 1200px;
   margin: 0 auto;

   .arrow {
      background-color: white;
      border-radius: 50%;
      border: 1px solid white;
      outline: 0;
      position: absolute;
      top: 40%;
      z-index: 1;
      cursor: pointer;
      height: 30px;
      width: 30px;
      opacity: 0.7;

      &:hover {
         opacity: 1;
         box-shadow: 0 0 15px white;
         border-radius: 50%;
      }
   }

   .arrowLeft {
      left: 30px;
   }

   .arrowRight {
      right: 20px;
   }
`;

export const ContentWrapper = styled(Container)`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 0;
   margin-bottom: 20px;
   max-width: 100%;
   padding: 0;
`;

export const Title = styled.span`
   font-size: 24px;
   color: white;
   font-weight: normal;
`;

export const SwitchContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0;
   background-color: white;
   height: 34px;
   border-radius: 34px;
   padding: 2px;
   position: relative;
`;

export const Tab = styled.span<{ selectedTab: number; tab: number }>`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0;
   width: 100px;
   font-size: 14px;
   font-weight: 700;
   color: ${(props) => (props.tab !== props.selectedTab ? `var(--black);` : `white;`)};
   height: 100%;
   border-radius: 34px;
   z-index: 1;
   cursor: pointer;
   transition: color ease 0.3s;
`;

export const Notch = styled.span<{ selectedTab: number }>`
   width: 100px;
   height: 32px;
   background-image: var(--gradient);
   position: absolute;
   border-radius: 32px;
   transition: all 0.3s cubic-bezier(0.6, -0.3, 0.735, 0.045);
   left: 2px;
   transform: ${(props) => (props.selectedTab !== 0 ? `translateX(100%)` : `translateX(0%)`)};
`;
