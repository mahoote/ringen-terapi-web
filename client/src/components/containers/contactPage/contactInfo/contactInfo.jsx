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
import { CenterStyled } from "../../center/center.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { ContactInfoContentStyled } from "./contactInfo.style";

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
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />
    </div>
  );
}

function ContactInfoContent(props) {
  const info = data.contactPage.contactInfo.info;

  return (
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
  );
}

function ContactInfo(props) {
  return (
    <div className={props.className}>
      <ContactInfoContentStyled {...props} className={""} />
    </div>
  );
}

export { ContactInfo, ContactInfoContent };
