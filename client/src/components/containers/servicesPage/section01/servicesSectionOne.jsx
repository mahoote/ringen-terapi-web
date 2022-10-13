import React from "react";
import { ImageTextSection } from "../../imageTextSection/imageTextSection";
import data from "../../../../../public/data.json";
import { TextStyled } from "../../../text/text.style";
import {
  desktopBig,
  desktopSmall,
  mobileBig,
  mobileSmall,
  tabletBig,
  tabletSmall,
} from "../../../globals/fontSizes";
import { ServicesSectionOneHeadlineStyled } from "./servicesSectionOne.style";
import { standardColors } from "../../../../palettes/standardColors.style";

function ServicesSectionOneHeadline(props) {
  const { services } = props;

  return (
    <div className={props.className}>
      <TextStyled
        text={data.servicesPage.section1.line1.text}
        sizeDesktop={desktopBig}
        sizeTablet={tabletBig}
        sizeMobile={mobileBig}
        textWeight={"bold"}
      />
      <TextStyled
        className={"my-5"}
        text={data.servicesPage.section1.line2.text}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />
      {services.map((service, i) => (
        <TextStyled
          key={i}
          text={service.title}
          sizeDesktop={desktopSmall}
          sizeTablet={tabletSmall}
          sizeMobile={mobileSmall}
          textWeight={"bold"}
          linkTo={service.pageLink}
        />
      ))}
    </div>
  );
}

function ServicesSectionOneService(props) {
  return (
    <div className={props.className}>
      <TextStyled
        text={props.headline}
        sizeDesktop={desktopBig}
        sizeTablet={tabletBig}
        sizeMobile={mobileBig}
        textWeight={"bold"}
      />
      <TextStyled
        className={"my-5"}
        text={props.text}
        sizeDesktop={desktopSmall}
        sizeTablet={desktopSmall}
        sizeMobile={desktopSmall}
      />
    </div>
  );
}

function ServicesSectionOne(props) {
  const services = data.servicesPage.services;

  const images = [
    {
      src: require("../../../../../public/images/people01.jpg"),
      alt: data.servicesPage.section1.image1.description,
      width: data.servicesPage.section1.image1.width,
      widthMobile: data.servicesPage.section1.image1.widthMobile,
      backgroundColor: standardColors.blue1,
      offsetX: "-3em",
      offsetY: "2em",
      offsetXMobile: "-2em",
      offsetYMobile: "-1em",
    },
    {
      src: require("../../../../../public/images/people01.jpg"),
      alt: services[0].image.description,
      width: services[0].image.width,
      widthMobile: services[0].image.widthMobile,
      backgroundColor: standardColors.brown3,
      offsetX: "0em",
      offsetY: "2em",
      offsetXMobile: "2em",
      offsetYMobile: "1em",
    },
  ];

  return (
    <ImageTextSection
      className={props.className}
      borderImagesHeight={"300px"}
      textContentFirst={
        <ServicesSectionOneHeadlineStyled services={services} />
      }
      images={[images[0], images[1]]}
      textContentSecond={
        <ServicesSectionOneService
          headline={services[0].title}
          text={services[1].about}
        />
      }
    />
  );
}

export { ServicesSectionOne, ServicesSectionOneHeadline };
