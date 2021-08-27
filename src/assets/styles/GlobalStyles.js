import { createGlobalStyle } from 'styled-components';
import COLORS from '../../commons/constants/colors';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  html {
    scroll-behavior: smooth;
    background-color: ${COLORS.background};
  }
  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
 
  body {
    font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", Roboto, Arial, "Noto Sans",sans-serif, "Apple Color Emoji", "Segoe UI", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    color: ${COLORS.fontColor};
    font-weight: 400;
  }
`;

export default GlobalStyles;
