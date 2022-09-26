import styled, { css } from "styled-components";
import { MobileMenu } from "./mobileMenu";
import { standardColors } from "../../palettes/standardColors.style";

const MobileMenuStyled = styled(MobileMenu)`
  transition: opacity 0.3s;

  ${(props) =>
    (props.showMenu === true &&
      css`
        display: block;
        opacity: 1;
      `) ||
    (props.showMenu === false &&
      css`
        opacity: 0;
        display: none;
      `)}

  background-color: ${standardColors.white1};
  display: flex;
  justify-content: center;

  text-align: center;
  padding: 3em 0;
`;

export { MobileMenuStyled };
