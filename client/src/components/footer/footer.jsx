import React, { useState } from "react";
import { CenterStyled } from "../containers/center/center.style";
import { TextStyled } from "../text/text.style";
import { standardColors } from "../../palettes/standardColors.style";
import { size } from "../../sizes/screenSize.style";
import { useResize } from "../../hooks/screenDetection";

import data from "../../../public/data.json";

const currentYear = new Date().getFullYear();

function Footer(props) {
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (window.innerWidth >= size.tablet) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }
  useResize(handleResize);

  function FooterRightMobile() {
    return (
      <div>
        <TextStyled
          text={data.websiteName}
          color={standardColors.green3}
          textWeight={"bold"}
          sizeTablet={3}
          sizeMobile={4}
        />
        <div className={"mt-5"}>
          <TextStyled text={data.info.address} />
          <TextStyled text={data.info.email} />
          <TextStyled text={data.info.phone} />
        </div>
      </div>
    );
  }

  function FooterLeftMobile() {
    return (
      <div>
        <TextStyled
          className={"my-6"}
          text={`© ${data.websiteName} ${currentYear}`}
          sizeTouch={6}
        />
        <TextStyled
          linkTo={"https://github.com/mahoote?tab=repositories"}
          text={"Nettside av Martin Teigen"}
        />
        <TextStyled text={"Foto av Google"} />
      </div>
    );
  }

  function FooterRight() {
    return (
      <div>
        <TextStyled
          text={data.websiteName}
          color={standardColors.green3}
          textWeight={"bold"}
          sizeDesktop={2}
          sizeTablet={3}
        />
        <TextStyled
          className={"my-6"}
          text={`© ${data.websiteName} ${currentYear}`}
          size={5}
          sizeTouch={6}
        />
        <TextStyled
          linkTo={"https://github.com/mahoote?tab=repositories"}
          text={"Nettside av Martin Teigen"}
        />
        <TextStyled text={"Foto av Google"} />
      </div>
    );
  }

  function FooterLeft() {
    return (
      <div>
        <TextStyled text={data.info.address} sizeDesktop={5} />
        <TextStyled text={data.info.email} sizeDesktop={5} />
        <TextStyled text={data.info.phone} sizeDesktop={5} />
      </div>
    );
  }

  return (
    <footer className={props.className + " footer py-6"}>
      {isMobile ? (
        <div className={" columns is-multiline mx-3"}>
          <FooterRightMobile />
          <FooterLeftMobile />
        </div>
      ) : (
        <div className={" columns is-multiline is-centered is-vcentered"}>
          <CenterStyled className={"column is-5"} content={<FooterRight />} />
          <CenterStyled className={"column is-5"} content={<FooterLeft />} />
        </div>
      )}
    </footer>
  );
}
export { Footer };
