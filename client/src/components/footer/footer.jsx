import React from "react";
import { CenterStyled } from "../containers/center/center.style";
import { TextStyled } from "../text/text.style";
import { standardColors } from "../../palettes/standardColors.style";

function Footer(props) {
  return (
    <footer className={props.className + " footer mt-6 pb-6"}>
      <div className={" columns is-multiline is-centered"}>
        <CenterStyled
          className={"column is-5"}
          content={
            <div>
              <TextStyled
                text={"Ringen Terapi"}
                color={standardColors.green3}
                textWeight={"bold"}
                sizeDesktop={2}
                sizeTablet={3}
                sizeMobile={4}
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
          }
        />
        <CenterStyled
          className={"column is-5"}
          content={
            <div>
              <TextStyled text={"Adresse 123, 123 Oslo"} sizeDesktop={5} />
              <TextStyled text={"epostadresse@gmail.com"} sizeDesktop={5} />
              <TextStyled text={"+47 123 45 678"} sizeDesktop={5} />
            </div>
          }
        />
      </div>
    </footer>
  );
}
export { Footer };
