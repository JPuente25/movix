import styled from "styled-components";

export const ImgContainer = styled.div`
   width: 100%;
   aspect-ratio: 1 / 1.5;

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