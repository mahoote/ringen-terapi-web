import styled, { css } from "styled-components";
import { Image } from "./image";

const ImageStyled = styled(Image)`
  position: relative;

  ${(props) => css`
    width: ${props.width};
    top: ${props.offsetY};
    left: ${props.offsetX};
  `};
`;

export { ImageStyled };
