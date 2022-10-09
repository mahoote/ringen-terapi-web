import { TextStyled } from "../../../text/text.style";
import data from "../../../../../public/data.json";
import {
  desktopBig,
  desktopSmall,
  mobileBig,
  mobileSmall,
  tabletBig,
  tabletSmall,
} from "../../../globals/fontSizes";
import React from "react";
import { AboutSectionOneHeadlineStyled } from "./aboutSectionOne.style";
import { CenterStyled } from "../../center/center.style";
import { Loader } from "../../loader/loader";

function AboutSectionOneHeadline(props) {
  return (
    <div className={props.className}>
      <TextStyled
        className={"my-5"}
        text={data.aboutPage.section1.line1.text}
        sizeDesktop={desktopBig}
        sizeTablet={tabletBig}
        sizeMobile={mobileBig}
        textWeight={"bold"}
      />
      <TextStyled
        text={data.aboutPage.section1.line2.text}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />
    </div>
  );
}

function AboutSectionOne(props) {
  return (
    <div>
      <Loader
        content={
          <CenterStyled
            content={
              <AboutSectionOneHeadlineStyled className={props.className} />
            }
          />
        }
      />
    </div>
  );
}

export { AboutSectionOne, AboutSectionOneHeadline };
