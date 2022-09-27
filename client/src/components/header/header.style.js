import styled, { css } from "styled-components";
import { Header, NavbarLink, NavbarLinkUnderline } from "./header";
import { device } from "../../sizes/screenSize.style";
import { standardColors } from "../../palettes/standardColors.style";

const HeaderStyled = styled(Header)`
  background-color: transparent;

  @media screen and ${device.laptop} {
    margin: 0 6em;
    padding: 1em 0;
  }
  margin: 0 2em;
  padding: 0.5em 0;
`;

const NavbarLinkUnderlineStyled = styled(NavbarLinkUnderline)`
  transition: border-bottom-color 0.2s;

  position: absolute;
  width: 80%;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-bottom: 3px solid transparent;
`;

const NavbarLinkStyled = styled(NavbarLink)`
  color: ${standardColors.black1};

  &:visited {
    color: inherit !important;
  }

  &:hover {
    background-color: transparent !important;
    color: ${standardColors.green1} !important;
  }

  &:hover ${NavbarLinkUnderlineStyled} {
    ${(props) =>
      props.type === "text" &&
      css`
        border-bottom: 3px solid ${standardColors.green1};
      `}
  }
`;

export { HeaderStyled, NavbarLinkStyled, NavbarLinkUnderlineStyled };
