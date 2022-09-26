import styled from "styled-components";
import { Button } from "./button";
import { standardColors } from "../../palettes/standardColors.style";

const ButtonStyled = styled(Button)`
  border-width: ${(props) => props.borderWidth};
  border-style: solid;
  border-color: ${standardColors.black1};
  border-radius: 0;

  padding: 0.5em 1.5em;
  background-color: transparent;
  color: ${standardColors.black1};

  &:hover {
    cursor: pointer;
    background-color: ${standardColors.green1};
    color: white;
    border-color: ${standardColors.green1};
  }
`;

export { ButtonStyled };
