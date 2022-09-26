import { createGlobalStyle } from "styled-components";
import { standardColors } from "../../palettes/standardColors.style";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${standardColors.white1};
  }
`;

export { GlobalStyle };
