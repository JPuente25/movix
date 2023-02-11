import styled from "styled-components";

export const ImgContainer = styled.div`
   width: 100%;
   /* background-color: var(--skeleton); */
   aspect-ratio: 1 / 1.5;
   border-radius: 10px;
   outline: 0;
   border: none;
   background-image: linear-gradient(to top, transparent 0%, transparent 2%, var(--skeleton) 5%, var(--skeleton) 100%);

   .lazy-load-image-background {
      width: 100%;
      aspect-ratio: 1 / 1.5;

      img {
         width: 100%;
         height: 100%;
         background-color: var(--skeleton);
         object-fit: cover;
         object-position: center;
      }
   }
`;