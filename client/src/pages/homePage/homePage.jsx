import React from "react";
import { HeaderStyled } from "../../components/header/header.style";
import { GlobalStyle } from "../../components/globals/global.style";
import { GridStyled } from "../../components/grids/grid.style";

function HomePage() {
  return (
    <GridStyled
      content={
        <>
          <GlobalStyle />
          <HeaderStyled />
        </>
      }
    />
  );
}

export { HomePage };
