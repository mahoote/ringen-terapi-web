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
import { CenterStyled } from "../../center/center.style";
import { Loader } from "../../loader/loader";

function MainSectionFour(props) {
  return (
    <div className={props.className}>
      <Loader
        content={
          <div className={"columns is-centered is-vcentered is-multiline mx-2"}>
            <div className={"column is-6-desktop is-9-tablet px-5"}>
              <CenterStyled
                content={
                  <div>
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
                }
              />
            </div>
            <div className={"column is-3-widescreen is-12 px-5"}>
              <CenterStyled
                content={
                  <ButtonStyled
                    className={"py-4"}
                    text={"Kontakt meg"}
                    borderWidth={"2.2px"}
                    textSize={2}
                    textSizeTouch={3}
                  />
                }
              />
            </div>
          </div>
        }
      />
    </div>
  );
}

export { MainSectionFour };
