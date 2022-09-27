import styled from "styled-components";
import { BorderImage } from "./borderImage";

const BorderImageStyled = styled(BorderImage)`
  background-color: ${(props) => props.backgroundColor};
  padding: ${(props) => props.padding};
`;

export { BorderImageStyled };
