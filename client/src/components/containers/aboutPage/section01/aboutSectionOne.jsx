import React, { useState } from "react";
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
import { size } from "../../../../sizes/screenSize.style";
import { useResize } from "../../../../hooks/screenDetection";

const images = [
  {
    src: require("../../../../../public/images/lin02.jpg"),
    alt: data.aboutPage.section1.image1.description,
    width: data.aboutPage.section1.image1.width,
    widthMobile: data.aboutPage.section1.image1.widthMobile,
    offsetX: "-2em",
    offsetY: "0.5em",
    offsetXMobile: "-0em",
    offsetYMobile: "-3em",
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
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (window.innerWidth >= size.tablet) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }
  useResize(handleResize);

  return (
    <div
      className={
        props.className + " columns is-centered is-vcentered is-multiline"
      }
    >
      <Loader
        className={" column is-5 "}
        content={<CenterStyled content={<AboutSectionOneIntroStyled />} />}
      />
      <Loader
        className={" column is-5 mt-5 "}
        content={
          <CenterStyled
            content={
              isMobile ? null : (
                <BorderImageStyled
                  src={images[0].src}
                  alt={images[0].alt}
                  backgroundColor={standardColors.blue1}
                  width={images[0].width}
                  padding={"1em"}
                  offsetY={images[0].offsetY}
                  offsetX={images[0].offsetX}
                />
              )
            }
          />
        }
      />
      {isMobile ? (
        <Loader
          content={
            <div
              className={" is-hidden-tablet "}
              style={{
                backgroundColor: standardColors.blue1,
              }}
            >
              <CenterStyled
                content={
                  <BorderImageStyled
                    src={images[0].src}
                    alt={images[0].alt}
                    backgroundColor={standardColors.blue1}
                    width={images[0].width}
                    padding={"1em"}
                    offsetY={images[0].offsetYMobile}
                    offsetX={images[0].offsetXMobile}
                  />
                }
              />
            </div>
          }
        />
      ) : null}
      <Loader
        className={" column is-11 my-5 pb-6"}
        content={<CenterStyled content={<AboutSectionOneParagraphStyled />} />}
      />
    </div>
  );
}

export { AboutSectionOne, AboutSectionOneIntro, AboutSectionOneParagraph };
