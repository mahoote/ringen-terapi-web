import styled from "styled-components";
import { standardColors } from "../../../../palettes/standardColors.style";
import { device } from "../../../../sizes/screenSize.style";
import { MainSectionTwo } from "./mainSectionTwo";

const MainSectionTwoStyled = styled(MainSectionTwo)`
  color: ${standardColors.green3};
  background-color: ${standardColors.green1};

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

export { MainSectionTwoStyled };
