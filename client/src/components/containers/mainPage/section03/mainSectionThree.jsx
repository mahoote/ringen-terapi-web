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
import { CenterStyled } from "../../center/center.style";
import { Loader } from "../../loader/loader";
import { MainSectionThreeServiceStyled } from "./mainSectionThree.style";
import { standardColors } from "../../../../palettes/standardColors.style";

import data from "../../../../../public/data.json";

function MainSectionThreeHeadline(props) {
  return (
    <CenterStyled
      className={props.className + " has-text-centered "}
      content={
        <div>
          <Loader
            content={
              <TextStyled
                className={"my-5 mx-2"}
                text={data.homePage.section3.heading.line1.text}
                sizeDesktop={desktopBig}
                sizeTablet={tabletBig}
                sizeMobile={mobileBig}
                textWeight={"bold"}
              />
            }
          />
          <Loader
            content={
              <TextStyled
                text={data.homePage.section3.heading.line2.text}
                sizeDesktop={desktopSmall}
                sizeTablet={tabletSmall}
                sizeMobile={mobileSmall}
              />
            }
          />
        </div>
      }
    />
  );
}

function MainSectionThreeService(props) {
  const { i, service, className } = props;

  return (
    <div key={i} className={" column is-5 m-3 "}>
      <Loader
        content={
          <>
            <div className={className + " p-6 "}>
              <TextStyled
                text={service.title}
                sizeDesktop={desktopBig}
                sizeTablet={tabletBig}
                sizeMobile={mobileBig}
                textWeight={"bold"}
              />
              {service.list.map((item, i) => (
                <ul key={i}>
                  <li className={" my-2 "}>
                    <TextStyled
                      text={item}
                      sizeDesktop={desktopSmall}
                      sizeTablet={tabletSmall}
                      sizeMobile={mobileSmall}
                    />
                  </li>
                </ul>
              ))}
            </div>
            <TextStyled
              className={"my-5"}
              text={"Les mer ➝"}
              sizeDesktop={desktopSmall}
              sizeTablet={tabletSmall}
              sizeMobile={mobileSmall}
              color={standardColors.brown3}
              linkTo={service.pageLink}
            />
          </>
        }
      />
    </div>
  );
}

function MainSectionThreeServices() {
  const services = data.services;

  return (
    <CenterStyled
      content={
        <div className={"columns is-multiline is-centered"}>
          {services.map((service, i) => (
            <MainSectionThreeServiceStyled key={i} i={i} service={service} />
          ))}
        </div>
      }
    />
  );
}

function MainSectionThree(props) {
  return (
    <div className={props.className}>
      <MainSectionThreeHeadline className={"mb-6"} />
      <MainSectionThreeServices />
    </div>
  );
}

export { MainSectionThree, MainSectionThreeService };
