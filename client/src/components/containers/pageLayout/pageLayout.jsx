import { GridStyled } from "../../grids/grid.style";
import { GlobalStyle } from "../../globals/global.style";
import { HeaderStyled } from "../../header/header.style";
import { FooterStyled } from "../../footer/footer.style";
import React from "react";

function PageLayout(props) {
  return (
    <GridStyled
      className={props.className}
      content={
        <>
          <GlobalStyle />
          <HeaderStyled />
          <div>{props.content}</div>
          <FooterStyled />
        </>
      }
    />
  );
}

export { PageLayout };
