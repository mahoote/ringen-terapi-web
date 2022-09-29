import { CenterStyled } from "../../center/center.style";
import { Loader } from "../../loader/loader";
import { TextStyled } from "../../../text/text.style";
import React from "react";
import { desktopBig, mobileBig, tabletBig } from "../../../globals/fontSizes";

function MainSectionTwo(props) {
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
              sizeDesktop={desktopBig}
              sizeTablet={tabletBig}
              sizeMobile={mobileBig}
            />
          }
        />
      }
    />
  );
}

export { MainSectionTwo };
