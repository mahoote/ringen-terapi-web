import styled from "styled-components";
import { Footer } from "./footer";
import { standardColors } from "../../palettes/standardColors.style";

const FooterStyled = styled(Footer)`
  background-color: ${standardColors.green1};
  color: white;
`;

export { FooterStyled };
