import styled from 'styled-components';


export const Container = styled.div`
   padding: 60px 20px 0 20px;
   /* margin: 0 20px; */
`;

export const ToolsContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   justify-content: center;
   margin: 20px 0;

   @media only screen and (min-width: 640px) {
      flex-direction: row;
      justify-content: space-between;
   }
`;

export const SelectContainer = styled.div`
   display: flex;
   gap: 30px;
   width: 95%;
   justify-content: end;
   margin-top: 20px;
   font-size: 14px;
   flex-direction: column;
   font-size: 18px;

   @media only screen and (min-width: 640px) {
      margin: 0;
      margin-right: 20px;
      font-size: 18px;
   }

   .select__control {
      cursor: pointer;
      background-color: var(--black-light);
      border: 2px solid var(--black-lighter);
      border-radius: 5px 38px 38px 5px;
      width: 100%;
      height: auto;
      color: white;

      @media only screen and (min-width: 640px) {
         width: 170px;
      }

      @media only screen and (min-width: 768px) {
         width: 200px;
      }
   }

   .select__placeholder {
      color: white;
   }

   .select__indicator {
      opacity: 0.5;
   }

   .select__multi-value {
      background-color: var(--black);
      color: white;
      border-radius: 5px;
   }

   .select__single-value {
      color: white;
   }

   .select__multi-value__label {
      color: white;
   }

   .select__menu {
      width: 150px;
      background-color: var(--black);
      color: var(--black);
      box-shadow: 0 0 10px black;
   }

   .select__option {
      color: white;

      &:hover {
         color: var(--black);
      }
   }

   @media only screen and (min-width: 640px) {
      flex-direction: row;
   }
`;

export const Title = styled.h1`
   color: white;
   font-weight: 400;
   margin: 0;
   white-space: nowrap;
   font-size: 28px;

   @media only screen and (min-width: 640px) {
      font-size: 34px;
}
`;



export const MoviesContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(2, ${window.innerWidth / 2 - 40}px);
   justify-content: center;
   align-items: center;
   margin: 0 auto;
   gap: 10px;
   overflow: hidden;

   &::-webkit-scrollbar {
      display: none;
   }

   @media only screen and (min-width: 640px) {
      grid-template-columns: repeat(3, ${window.innerWidth / 3 - 30}px);
   }

   @media only screen and (min-width: 768px) {
      grid-template-columns: repeat(4, ${window.innerWidth / 4 - 30}px);
   }

   @media only screen and (min-width: 1024px) {
      grid-template-columns: repeat(5, ${window.innerWidth / 5 - 30}px);
   }

   .movie-card {
      width: 100%;

      @media only screen and (min-width: 768px) {
         width: 100%;
      }
   }
`;
