import React from "react";
import { HeaderStyled } from "../../components/header/header.style";
import { GlobalStyle } from "../../components/globals/global.style";
import { GridStyled } from "../../components/grids/grid.style";
import { MainSectionOneStyled } from "../../components/containers/mainPage/section01/mainSectionOne.style";
import { FooterStyled } from "../../components/footer/footer.style";
import { MainSectionTwoStyled } from "../../components/containers/mainPage/section02/mainSectionTwo.style";
import { MainSectionThree } from "../../components/containers/mainPage/section03/mainSectionThree";

function HomePage() {
  return (
    <GridStyled
      content={
        <>
          <GlobalStyle />
          <HeaderStyled />
          <div>
            <MainSectionOneStyled className={"my-4"} />
            <MainSectionTwoStyled />
            <MainSectionThree className={"my-6"} />
          </div>
          <FooterStyled />
        </>
      }
    />
  );
}

export { HomePage };
