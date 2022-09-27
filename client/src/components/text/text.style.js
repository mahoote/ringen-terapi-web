import styled from "styled-components";
import { Text, TextContentSpan } from "./text";

const TextStyled = styled(Text)`
  color: ${(props) => props.color};
`;

const TextContentSpanStyled = styled(TextContentSpan)`
  color: ${(props) => props.highlightColor};
`;

export { TextStyled, TextContentSpanStyled };
