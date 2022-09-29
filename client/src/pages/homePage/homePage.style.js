import styled from "styled-components";
import { HomePage, MidSectionText } from "./homePage";
import { standardColors } from "../../palettes/standardColors.style";
import { device } from "../../sizes/screenSize.style";

const HomePageStyled = styled(HomePage)``;

const MidSectionTextStyled = styled(MidSectionText)`
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

export { HomePageStyled, MidSectionTextStyled };
