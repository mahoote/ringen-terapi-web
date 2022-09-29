import React from "react";
import { HeaderStyled } from "../../components/header/header.style";
import { GlobalStyle } from "../../components/globals/global.style";
import { GridStyled } from "../../components/grids/grid.style";
import { MainColumnsStyled } from "../../components/containers/columns/mainPage/mainColumns.style";
import { FooterStyled } from "../../components/footer/footer.style";
import { TextStyled } from "../../components/text/text.style";
import { CenterStyled } from "../../components/containers/center/center.style";
import { MidSectionTextStyled } from "./homePage.style";
import { Loader } from "../../components/containers/loader/loader";

function MidSectionText(props) {
  return (
    <CenterStyled
      className={props.className}
      content={
        <Loader
          content={
            <TextStyled
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              }
              sizeDesktop={2}
              sizeTablet={3}
              sizeMobile={4}
            />
          }
        />
      }
    />
  );
}

function HomePage() {
  return (
    <GridStyled
      content={
        <>
          <GlobalStyle />
          <HeaderStyled />
          <div>
            <MainColumnsStyled className={"my-4"} />
            <MidSectionTextStyled />
          </div>
          <FooterStyled />
        </>
      }
    />
  );
}

export { HomePage, MidSectionText };
