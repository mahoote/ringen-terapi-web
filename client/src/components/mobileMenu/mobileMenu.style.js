import styled from "styled-components";
import { MobileMenu } from "./mobileMenu";
import { standardColors } from "../../palettes/standardColors.style";

const MobileMenuStyled = styled(MobileMenu)`
  background-color: ${standardColors.white1};
  display: flex;
  justify-content: center;

  text-align: center;
  padding: 3em 0;
`;

export { MobileMenuStyled };
