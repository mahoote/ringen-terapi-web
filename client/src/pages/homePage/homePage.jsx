import React from "react";
import { HeaderStyled } from "../../components/header/header.style";
import { GlobalStyle } from "../../components/globals/global.style";
import { GridStyled } from "../../components/grids/grid.style";
import { MainColumnsStyled } from "../../components/containers/columns/mainPage/mainColumns.style";

function HomePage() {
  return (
    <GridStyled
      content={
        <>
          <GlobalStyle />
          <HeaderStyled />
          <div>
            <MainColumnsStyled className={"my-4"} />
          </div>
          <nav
            className={
              "has-text-centered has-text-light has-background-dark py-4 is-size-2"
            }
          >
            Navbar
          </nav>
        </>
      }
    />
  );
}

export { HomePage };
