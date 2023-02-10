import styled from 'styled-components';

export const Container = styled.div`
   height: 700px;
   padding-top: 200px;
   div {
      text-align: center;
      color: var(--black-light);
      display: flex;
      flex-direction: column;
      span.bigText {
         font-size: 150px;
         font-weight: 700;
      }
      span.smallText {
         font-size: 44px;
      }
   }
`;
