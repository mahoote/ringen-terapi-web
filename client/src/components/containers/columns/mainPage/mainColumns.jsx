import React, { useState } from "react";
import { TextStyled } from "../../../text/text.style";
import { CenterStyled } from "../../center/center.style";
import {
  MainColumnTextAboutStyled,
  MainColumnTextHeadlineStyled,
} from "./mainColumns.style";
import { standardColors } from "../../../../palettes/standardColors.style";
import { BorderImageStyled } from "../../../images/borderImage/borderImage.style";
import { BorderImagesStyled } from "../../../images/borderImages/borderImages.style";
import { size } from "../../../../sizes/screenSize.style";
import { useResize } from "../../../../hooks/screenDetection";
import { Loader } from "../../loader/loader";

const desktopBig = 2;
const desktopSmall = 4;

const tabletBig = 3;
const tabletSmall = 5;

const mobileBig = 3;
const mobileSmall = 5;

const exampleImages = [
  {
    src: require("../../../../../public/images/ex01.jpg"),
    alt: "Example image 1",
    width: "400px",
    widthMobile: "300px",
    offsetX: "-3em",
    offsetY: "2em",
    offsetXMobile: "-2em",
    offsetYMobile: "-1em",
  },
  {
    src: require("../../../../../public/images/ex02.jpg"),
    alt: "Example image 2",
    width: "400px",
    widthMobile: "300px",
    offsetX: "3em",
    offsetY: "-3em",
    offsetXMobile: "2em",
    offsetYMobile: "2em",
  },
];

function MainColumnTextAbout(props) {
  return (
    <div className={props.className}>
      <TextStyled
        className={"my-5"}
        text={"Hei, jeg er Lin"}
        sizeDesktop={desktopBig}
        sizeTablet={tabletBig}
        sizeMobile={mobileBig}
        textWeight={"bold"}
      />
      <TextStyled
        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}
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

function MainColumnTextHeadline(props) {
  return (
    <div className={props.className}>
      <TextStyled
        text={"INDIVIDUELL, FAMILIE, OG ARBEIDSPLASS"}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />
      <TextStyled
        className={"my-5"}
        text={"Atferdspsykologi psyko-, kropps og relasjonsterapi"}
        sizeDesktop={desktopBig}
        sizeTablet={tabletBig}
        sizeMobile={mobileBig}
        textWeight={"bold"}
        highlightPosStart={1}
        highlightPosEnd={4}
        highlightColor={standardColors.green1}
      />
      <TextStyled
        text={"I OSLO OG LILLESTRØM"}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />
    </div>
  );
}

function MainColumnsDesktopImages() {
  return (
    <>
      <Loader
        className={" column is-5 m-5"}
        content={
          <CenterStyled
            content={
              <BorderImageStyled
                src={exampleImages[0].src}
                alt={exampleImages[0].alt}
                backgroundColor={standardColors.green1}
                width={exampleImages[0].width}
                padding={"1em"}
                offsetY={exampleImages[0].offsetY}
                offsetX={exampleImages[0].offsetX}
              />
            }
          />
        }
      />

      <Loader
        className={" column is-5 m-5"}
        content={
          <CenterStyled
            content={
              <BorderImageStyled
                src={exampleImages[1].src}
                alt={exampleImages[1].alt}
                backgroundColor={standardColors.brown3}
                width={exampleImages[1].width}
                padding={"1em"}
                offsetY={exampleImages[1].offsetY}
                offsetX={exampleImages[1].offsetX}
              />
            }
          />
        }
      />
    </>
  );
}

function MainColumns(props) {
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
    <div className={props.className + " columns is-centered is-multiline "}>
      <Loader
        className={" column is-5 m-5 "}
        content={<CenterStyled content={<MainColumnTextHeadlineStyled />} />}
      />

      {isMobile ? (
        <Loader
          className={" column is-12 my-6 "}
          content={
            <CenterStyled
              content={
                <BorderImagesStyled
                  images={exampleImages}
                  backgroundColor={standardColors.green1}
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
        className={" column is-5 m-5 "}
        content={<CenterStyled content={<MainColumnTextAboutStyled />} />}
      />
    </div>
  );
}

export { MainColumns, MainColumnTextHeadline, MainColumnTextAbout };
