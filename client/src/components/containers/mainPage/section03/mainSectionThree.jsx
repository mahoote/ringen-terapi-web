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

const services = [
  {
    title: "Individuell",
    list: ["Punkt", "Punkt", "Punkt", "Punkt"],
    pageLink: "/services",
  },
  {
    title: "Familie",
    list: ["Punkt", "Punkt", "Punkt", "Punkt", "Punkt", "Punkt"],
    pageLink: "/services",
  },
  {
    title: "Arbeidsplass",
    list: ["Punkt", "Punkt", "Punkt", "Punkt"],
    pageLink: "/services",
  },
];

function MainSectionThreeHeadline(props) {
  return (
    <CenterStyled
      className={props.className + " has-text-centered "}
      content={
        <div>
          <Loader
            content={
              <TextStyled
                className={"my-5"}
                text={"Hvordan kan jeg hjelpe?"}
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
                text={"Mine tjenester"}
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
    </div>
  );
}

function MainSectionThreeServices() {
  return (
    <CenterStyled
      content={
        <div className={"columns is-multiline is-centered"}>
          {services.map((service, i) => (
            <MainSectionThreeServiceStyled i={i} service={service} />
          ))}
        </div>
      }
    />
  );
}

function MainSectionThree(props) {
  return (
    <div className={props.className}>
      <MainSectionThreeHeadline className={"my-6"} />
      <MainSectionThreeServices />
    </div>
  );
}

export { MainSectionThree, MainSectionThreeService };
