import styled from "styled-components";
import { BorderImage } from "./borderImage";
import { standardColors } from "../../../palettes/standardColors.style";

const BorderImageStyled = styled(BorderImage)`
  background-color: ${standardColors.green1};
  padding: ${(props) => props.padding};
`;

export { BorderImageStyled };
