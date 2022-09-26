import styled, { css } from "styled-components";
import { MobileMenu } from "./mobileMenu";
import { standardColors } from "../../palettes/standardColors.style";

const MobileMenuStyled = styled(MobileMenu)`
  transition: opacity 0.3s;
  opacity: 0;
  visibility: hidden;
  background-color: ${standardColors.white1};
  display: flex;
  justify-content: center;
  position: fixed;
  height: 100%;
  width: 100%;

  text-align: center;
  padding: 3em 0;

  ${(props) =>
    props.showMenu === true &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

export { MobileMenuStyled };
