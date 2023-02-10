import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   :root {
      font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
      font-size: 16px;
      line-height: 1;
      font-weight: 500;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;

      --black: #04152d;
      --black2: #041226;
      --black3: #020c1b;
      --black-lighter: #1c4b91;
      --black-light: #173d77;
      --pink: #da2f68;
      --orange: #f89e00;
      --gradient: linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%);
      --skeleton: rgba(178, 170, 181, 0.7);
   }

   html {
      height: 100%;
   }

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      background-color: var(--black);
      height: 100%;
   }

   ::-webkit-scrollbar {
      display: none;
   }

   .skeleton {
      position: relative;
      overflow: hidden;
      background-color: #0a2955;
      &::after {
         position: absolute;
         top: 0;
         right: 0;
         bottom: 0;
         left: 0;
         transform: translateX(-100%);
         background-image: linear-gradient(
            90deg,
            rgba(#193763, 0) 0,
            rgba(#193763, 0.2) 20%,
            rgba(#193763, 0.5) 60%,
            rgba(#193763, 0)
         );
         animation: shimmer 2s infinite;
         content: "";
      }

      @keyframes shimmer {
         100% {
            transform: translateX(100%);
         }
      }
   }
`;

export { GlobalStyles };