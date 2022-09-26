import styled from "styled-components";
import { Button } from "./button";

const ButtonStyled = styled(Button)`
  border-width: ${(props) => props.borderWidth};
  border-style: solid;
  border-color: #14302d;
  border-radius: 0;
`;

export { ButtonStyled };
