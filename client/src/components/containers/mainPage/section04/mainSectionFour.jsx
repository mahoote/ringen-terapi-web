import React from "react";
import { TextStyled } from "../../../text/text.style";
import {
  desktopBig,
  desktopSmall,
  mobileBig,
  mobileSmall,
  tabletBig,
  tabletSmall,
} from "../../../globals/fontSizes";
import { ButtonStyled } from "../../../button/button.style";

function MainSectionFour(props) {
  return (
    <div className={props.className}>
      <div className={"columns is-centered is-vcentered is-multiline mx-2"}>
        <div className={"column is-6 px-5"}>
          <TextStyled
            text={"Ta kontakt og la oss bli kjent"}
            sizeDesktop={desktopBig}
            sizeTablet={tabletBig}
            sizeMobile={mobileBig}
            textWeight={"bold"}
          />
          <TextStyled
            className={"my-5"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            sizeDesktop={desktopSmall}
            sizeTablet={tabletSmall}
            sizeMobile={mobileSmall}
          />
        </div>
        <div className={"column is-3 px-5"}>
          <ButtonStyled
            className={"py-4"}
            text={"Kontakt meg"}
            borderWidth={"2.5px"}
            textSize={2}
            textSizeTouch={3}
          />
        </div>
      </div>
    </div>
  );
}

export { MainSectionFour };
