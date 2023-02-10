import styled from 'styled-components';

export const StyledHeroBanner = styled.div`
   width: 100%;
   height: 450px;
   background-color: var(--black);
   display: flex;
   align-items: center;
   position: relative;

   @media only screen and (min-width: 768px) {
      height: 700px;
   }
`;

export const BackdropImg = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   opacity: 0.5;
   overflow: hidden;

   div {
      height: 100%;

      .lazy-load-image-background {
         height: 100%;
      }
   }
`;

export const OpacityLayer = styled.div`
   width: 100%;
   height: 250px;
   background: linear-gradient(
      to bottom,
      rgba(4, 21, 45, 0) 0%,
      var(--black) 79.17%
   );
   position: absolute;
   bottom: 0;
   left: 0;
`;

export const ContentContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   color: white;
   text-align: center;
   position: relative;
   max-width: 800px;
   margin: 0 auto;
`;

export const Title = styled.span`
   font-size: 50px;
   font-weight: 700;
   margin-bottom: 10px;

   @media only screen and (min-width: 768px) {
      margin-bottom: 0;
      font-size: 90px;
   }
`;

export const Subtitle = styled.span`
   font-size: 18px;
   font-weight: 500;
   margin-bottom: 40px;

   @media only screen and (min-width: 768px) {
      font-size: 24px;
   }
`;

export const SearchField = styled.div<{queryWarning?: string}>`
   display: flex;
   align-items: center;
   width: 100%;

   input {
      width: calc(100% - 100px);
      height: 50px;
      background-color: white;
      outline: 0;
      border: none;
      border-radius: 30px 0 0 30px;
      padding: 0 15px;
      font-size: 14px;

      &::placeholder {
         color: ${props => props.queryWarning === 'true'
                     ? 'red'
                     : 'auto'}
      }

      @media only screen and (min-width: 768px) {
         width: calc(100% - 150px);
         height: 60px;
         font-size: 20px;
         padding: 0 30px;
      }
   }

   button {
      width: 100px;
      height: 50px;
      background-image: var(--gradient);
      color: white;
      outline: 0;
      border: 0;
      border-radius: 0 30px 30px 0;
      font-size: 16px;
      cursor: pointer;

      @media only screen and (min-width: 768px) {
         width: 150px;
         height: 60px;
         font-size: 18px;
      }
   }
`;