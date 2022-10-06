import { TextStyled } from "../../../text/text.style";
import data from "../../../../../public/data.json";
import {
  desktopBig,
  mobileBig,
  mobileSmall,
  tabletBig,
  tabletSmall,
} from "../../../globals/fontSizes";
import React from "react";
import { CenterStyled } from "../../center/center.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  ContactInfoContentStyled,
  ContactInfoImageStyled,
} from "./contactInfo.style";
import { BorderImageStyled } from "../../../images/borderImage/borderImage.style";
import { standardColors } from "../../../../palettes/standardColors.style";
import { Loader } from "../../loader/loader";

const images = [
  {
    src: require("../../../../../public/images/image02.jpg"),
    alt: data.homePage.section1.image2.description,
    width: data.homePage.section1.image2.width,
    widthMobile: data.homePage.section1.image2.widthMobile,
    offsetX: "2em",
    offsetY: "-3em",
    offsetXMobile: "2em",
    offsetYMobile: "2em",
  },
  {
    src: require("../../../../../public/images/image02.jpg"),
    alt: data.homePage.section1.image2.description,
    width: data.homePage.section1.image2.width,
    widthMobile: data.homePage.section1.image2.widthMobile,
    offsetX: "2em",
    offsetY: "-3em",
    offsetXMobile: "2em",
    offsetYMobile: "2em",
  },
];

function ContactInfoLine(props) {
  let icon = null;

  switch (props.line.icon) {
    case "location": {
      icon = faLocationPin;
      break;
    }
    case "email": {
      icon = faEnvelope;
      break;
    }
    case "phone": {
      icon = faPhone;
      break;
    }
  }

  return (
    <div className={"my-3 is-flex is-vcentered"}>
      <FontAwesomeIcon
        icon={icon}
        size={"2x"}
        className={"mr-4"}
        style={{ width: "40px" }}
      />
      <TextStyled
        text={props.line.text}
        sizeDesktop={tabletSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />
    </div>
  );
}

function ContactInfoContent(props) {
  const info = data.contactPage.contactInfo.info;

  return (
    <Loader
      content={
        <CenterStyled
          className={props.className}
          content={
            <div className={"my-6"}>
              <TextStyled
                text={data.contactPage.contactInfo.line1.text}
                sizeDesktop={desktopBig}
                sizeTablet={tabletBig}
                sizeMobile={mobileBig}
                textWeight={"bold"}
              />
              <div className={"mt-6"}>
                {info.map((line, i) => (
                  <ContactInfoLine key={i} line={line} />
                ))}
              </div>
            </div>
          }
        />
      }
    />
  );
}

function ContactInfoImage(props) {
  return (
    <div className={props.className}>
      <Loader
        content={
          <CenterStyled
            content={
              <BorderImageStyled
                src={images[0].src}
                alt={images[0].alt}
                backgroundColor={standardColors.brown3}
                width={images[0].width}
                padding={"1em"}
                offsetY={images[0].offsetY}
                offsetX={images[0].offsetX}
              />
            }
          />
        }
      />
    </div>
  );
}

function ContactInfo(props) {
  return (
    <div className={props.className}>
      <ContactInfoContentStyled />
      <ContactInfoImageStyled className={"is-hidden-touch"} />
    </div>
  );
}

export { ContactInfo, ContactInfoContent, ContactInfoImage };
