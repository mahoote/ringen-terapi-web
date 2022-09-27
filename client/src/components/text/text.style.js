import styled from "styled-components";
import { Text, TextContentSpan, TextLink } from "./text";

const TextStyled = styled(Text)`
  color: ${(props) => props.color};
  text-decoration: none;
`;

const TextContentSpanStyled = styled(TextContentSpan)`
  color: ${(props) => props.highlightColor};
`;

const TextLinkStyled = styled(TextLink)`
  &:hover {
    font-weight: bold;
  }

  color: inherit !important;
`;

export { TextStyled, TextContentSpanStyled, TextLinkStyled };
