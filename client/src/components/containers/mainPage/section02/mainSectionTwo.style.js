import styled, { css } from "styled-components";
import { standardColors } from "../../../../palettes/standardColors.style";
import { device } from "../../../../sizes/screenSize.style";
import { MainSectionTwo, MainSectionTwoText } from "./mainSectionTwo";

const MainSectionTwoStyled = styled(MainSectionTwo)`
  color: ${standardColors.green3};
  background-color: transparent;

  padding: 20em 2em;

  @media screen and ${device.mobileL} {
    padding-left: 5em;
    padding-right: 5em;
  }
  @media screen and ${device.laptop} {
    padding-left: 20em;
    padding-right: 20em;
  }
`;

const MainSectionTwoTextStyled = styled(MainSectionTwoText)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;

  transition: opacity 1s;

  ${(props) =>
    props.showElement === false &&
    css`
      opacity: 0;
    `}
`;

export { MainSectionTwoStyled, MainSectionTwoTextStyled };
