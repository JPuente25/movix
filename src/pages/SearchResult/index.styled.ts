import styled from 'styled-components';

export const Container = styled.div`
   padding-top: 60px;
   padding-bottom: 60px;

   span.query {
      display: flex;
      align-items: center;
      color: white;
      font-weight: 400;
      margin: 20px 10px;
      padding: 10px 30px;
      font-size: 28px;
      width: 100%;
      height: auto;
      border-radius: 10px;
      background-color: black;
      box-shadow: 0 0 20px black;
      @media only screen and (min-width: 768px) {
         font-size: 34px;
      }
   }
`;
