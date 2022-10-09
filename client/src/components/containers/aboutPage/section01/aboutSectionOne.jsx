import React from "react";
import { TextStyled } from "../../../text/text.style";
import { CenterStyled } from "../../center/center.style";
import { Loader } from "../../loader/loader";
import {
  desktopBig,
  desktopSmall,
  mobileBig,
  mobileSmall,
  tabletBig,
  tabletSmall,
} from "../../../globals/fontSizes";

import data from "../../../../../public/data.json";
import {
  AboutSectionOneIntroStyled,
  AboutSectionOneParagraphStyled,
} from "./aboutSectionOne.style";
import { BorderImageStyled } from "../../../images/borderImage/borderImage.style";
import { standardColors } from "../../../../palettes/standardColors.style";

const images = [
  {
    src: require("../../../../../public/images/image01.jpg"),
    alt: data.homePage.section1.image1.description,
    width: data.homePage.section1.image1.width,
    widthMobile: data.homePage.section1.image1.widthMobile,
    offsetX: "0em",
    offsetY: "2em",
  },
];

function AboutSectionOneIntro(props) {
  return (
    <div className={props.className}>
      <TextStyled
        className={"my-5"}
        text={data.aboutPage.section1.headline1.text}
        sizeDesktop={desktopBig}
        sizeTablet={tabletBig}
        sizeMobile={mobileBig}
        textWeight={"bold"}
      />
      <TextStyled
        text={data.aboutPage.section1.paragraph1.text}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />
    </div>
  );
}

function AboutSectionOneParagraph(props) {
  return (
    <div className={props.className}>
      <TextStyled
        text={data.aboutPage.section1.paragraph2.text}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />
    </div>
  );
}

function AboutSectionOne(props) {
  return (
    <div
      className={
        props.className + " columns is-centered is-vcentered is-multiline"
      }
    >
      <Loader
        className={" column is-5 mb-5 "}
        content={<CenterStyled content={<AboutSectionOneIntroStyled />} />}
      />
      <Loader
        className={" column is-5 my-5 "}
        content={
          <CenterStyled
            content={
              <BorderImageStyled
                src={images[0].src}
                alt={images[0].alt}
                backgroundColor={standardColors.green1}
                width={images[0].width}
                padding={"1em"}
                offsetY={images[0].offsetY}
                offsetX={images[0].offsetX}
              />
            }
          />
        }
      />
      <Loader
        className={" column is-12 my-5 pb-6"}
        content={<CenterStyled content={<AboutSectionOneParagraphStyled />} />}
      />
    </div>
  );
}

export { AboutSectionOne, AboutSectionOneIntro, AboutSectionOneParagraph };
