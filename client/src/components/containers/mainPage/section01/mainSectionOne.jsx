import React, { useState } from "react";
import { TextStyled } from "../../../text/text.style";
import { CenterStyled } from "../../center/center.style";
import {
  MainSectionOneAboutStyled,
  MainSectionOneHeadlineStyled,
} from "./mainSectionOne.style";
import { standardColors } from "../../../../palettes/standardColors.style";
import { BorderImageStyled } from "../../../images/borderImage/borderImage.style";
import { BorderImagesStyled } from "../../../images/borderImages/borderImages.style";
import { size } from "../../../../sizes/screenSize.style";
import { useResize } from "../../../../hooks/screenDetection";
import { Loader } from "../../loader/loader";
import {
  desktopBig,
  desktopSmall,
  mobileBig,
  mobileSmall,
  tabletBig,
  tabletSmall,
} from "../../../globals/fontSizes";
import { ButtonStyled } from "../../../button/button.style";

import data from "../../../../../public/data.json";
import { Link } from "react-router-dom";

const images = [
  {
    src: require("../../../../../public/images/people01.jpg"),
    alt: data.homePage.section1.image1.description,
    width: data.homePage.section1.image1.width,
    widthMobile: data.homePage.section1.image1.widthMobile,
    offsetX: "-3em",
    offsetY: "2em",
    offsetXMobile: "-2em",
    offsetYMobile: "-1em",
  },
  {
    src: require("../../../../../public/images/lin01.jpg"),
    alt: data.homePage.section1.image2.description,
    width: data.homePage.section1.image2.width,
    widthMobile: data.homePage.section1.image2.widthMobile,
    offsetX: "3em",
    offsetY: "-3em",
    offsetXMobile: "2em",
    offsetYMobile: "2em",
  },
];

function MainSectionOneAbout(props) {
  return (
    <div className={props.className}>
      <TextStyled
        className={"my-5"}
        text={data.homePage.section1.about.line1.text}
        sizeDesktop={desktopBig}
        sizeTablet={tabletBig}
        sizeMobile={mobileBig}
        textWeight={"bold"}
      />
      <TextStyled
        text={data.homePage.section1.about.line2.text}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />
      <TextStyled
        className={"my-5"}
        text={"Les mer om Lin ➝"}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
        color={standardColors.brown3}
        linkTo={"/about"}
      />
    </div>
  );
}

function MainSectionOneHeadline(props) {
  return (
    <div className={props.className}>
      <TextStyled
        text={data.homePage.section1.heading.line1.text}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />
      <TextStyled
        className={"my-5"}
        text={data.homePage.section1.heading.line2.text}
        sizeDesktop={desktopBig}
        sizeTablet={tabletBig}
        sizeMobile={mobileBig}
        textWeight={"bold"}
        highlightPosStart={
          data.homePage.section1.heading.line2.highlightPosStart
        }
        highlightPosEnd={data.homePage.section1.heading.line2.highlightPosEnd}
        highlightColor={standardColors.blue1}
      />
      <TextStyled
        text={data.homePage.section1.heading.line3.text}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />
      <div className={"is-hidden-tablet"}>
        <hr
          className={"my-6"}
          style={{ backgroundColor: standardColors.black1 }}
        />
        <Link to={data.links[3].pageLink}>
          <ButtonStyled
            text={data.links[3].name}
            borderWidth={"2.3px"}
            textSize={"4"}
          />
        </Link>
      </div>
    </div>
  );
}

function MainColumnsDesktopImages() {
  return (
    <>
      <Loader
        className={" column is-5 my-5 "}
        content={
          <CenterStyled
            content={
              <BorderImageStyled
                src={images[0].src}
                alt={images[0].alt}
                backgroundColor={standardColors.blue1}
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
        className={" column is-5 my-5 "}
        content={
          <CenterStyled
            content={
              <BorderImageStyled
                src={images[1].src}
                alt={images[1].alt}
                backgroundColor={standardColors.brown3}
                width={images[1].width}
                padding={"1em"}
                offsetY={images[1].offsetY}
                offsetX={images[1].offsetX}
              />
            }
          />
        }
      />
    </>
  );
}

function MainSectionOne(props) {
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
        props.className + " columns is-centered is-vcentered is-multiline mb-0"
      }
    >
      <Loader
        className={" column is-5 my-5 "}
        content={<CenterStyled content={<MainSectionOneHeadlineStyled />} />}
      />

      {isMobile ? (
        <Loader
          className={" column is-12 my-6 "}
          content={
            <CenterStyled
              content={
                <BorderImagesStyled
                  images={images}
                  backgroundColor={standardColors.blue1}
                  height={"500px"}
                />
              }
            />
          }
        />
      ) : (
        <MainColumnsDesktopImages />
      )}

      <Loader
        className={" column is-5 my-5 "}
        content={<CenterStyled content={<MainSectionOneAboutStyled />} />}
      />
    </div>
  );
}

export { MainSectionOne, MainSectionOneHeadline, MainSectionOneAbout };
