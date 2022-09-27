import React, { useState } from "react";
import { CenterStyled } from "../containers/center/center.style";
import { TextStyled } from "../text/text.style";
import { standardColors } from "../../palettes/standardColors.style";
import { size } from "../../sizes/screenSize.style";
import { useResize } from "../../hooks/screenDetection";

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
          text={"Ringen Terapi"}
          color={standardColors.green3}
          textWeight={"bold"}
          sizeTablet={3}
          sizeMobile={4}
        />
        <div className={"mt-5"}>
          <TextStyled text={"Adresse 123, 123 Oslo"} />
          <TextStyled text={"epostadresse@gmail.com"} />
          <TextStyled text={"+47 123 45 678"} />
        </div>
      </div>
    );
  }

  function FooterLeftMobile() {
    return (
      <div>
        <TextStyled
          className={"my-6"}
          text={"© RingenTerapi 2022"}
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
          text={"Ringen Terapi"}
          color={standardColors.green3}
          textWeight={"bold"}
          sizeDesktop={2}
          sizeTablet={3}
        />
        <TextStyled
          className={"my-6"}
          text={"© RingenTerapi 2022"}
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
        <TextStyled text={"Adresse 123, 123 Oslo"} sizeDesktop={5} />
        <TextStyled text={"epostadresse@gmail.com"} sizeDesktop={5} />
        <TextStyled text={"+47 123 45 678"} sizeDesktop={5} />
      </div>
    );
  }

  return (
    <footer className={props.className + " footer mt-6 pb-6"}>
      {isMobile ? (
        <div className={" columns is-multiline mx-3"}>
          <FooterRightMobile />
          <FooterLeftMobile />
        </div>
      ) : (
        <div className={" columns is-multiline is-centered"}>
          <CenterStyled className={"column is-5"} content={<FooterRight />} />
          <CenterStyled className={"column is-5"} content={<FooterLeft />} />
        </div>
      )}
    </footer>
  );
}
export { Footer };
