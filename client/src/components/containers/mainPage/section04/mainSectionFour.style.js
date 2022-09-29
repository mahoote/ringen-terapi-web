import styled from "styled-components";
import { MainSectionFour } from "./mainSectionFour";
import { standardColors } from "../../../../palettes/standardColors.style";
import { device } from "../../../../sizes/screenSize.style";

const MainSectionFourStyled = styled(MainSectionFour)`
  background-color: ${standardColors.white1};
  position: relative;
  z-index: 10;
  padding-bottom: 9em;

  @media screen and ${device.tablet} {
    padding-top: 9em;
  }
`;

export { MainSectionFourStyled };
