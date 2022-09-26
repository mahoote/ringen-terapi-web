import styled from "styled-components";
import { Header } from "./header";
import { device } from "../../sizes/screenSize.style";

const HeaderStyled = styled(Header)`
  @media screen and ${device.laptop} {
    margin: 1em 6em;
  }

  margin: 0.5em 2em;
`;

export { HeaderStyled };
