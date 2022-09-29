import styled from "styled-components";
import { MainSectionFour } from "./mainSectionFour";
import { standardColors } from "../../../../palettes/standardColors.style";

const MainSectionFourStyled = styled(MainSectionFour)`
  background-color: ${standardColors.white1};
  position: relative;
  z-index: 10;

  padding: 6em 0;
`;

export { MainSectionFourStyled };
