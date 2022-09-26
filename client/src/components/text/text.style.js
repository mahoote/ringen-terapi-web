import styled from "styled-components";
import { Text } from "./text";

const TextStyled = styled(Text)`
  color: ${(props) => props.color};
`;

export { TextStyled };
