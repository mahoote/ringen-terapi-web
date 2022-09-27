import React from "react";
import { HeaderStyled } from "../../components/header/header.style";
import { GlobalStyle } from "../../components/globals/global.style";
import { GridStyled } from "../../components/grids/grid.style";
import { MainColumnsStyled } from "../../components/containers/columns/mainPage/mainColumns.style";
import { FooterStyled } from "../../components/footer/footer.style";

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
          <FooterStyled />
        </>
      }
    />
  );
}

export { HomePage };
