import React from "react";
import { TextStyled } from "../../text/text.style";
import { CenterStyled } from "../center/center.style";
import { ColumnTextHeadlineStyled } from "./columns.style";
import { standardColors } from "../../../palettes/standardColors.style";
import { BorderImageStyled } from "../../images/borderImage/borderImage.style";

function ColumnTextHeadline(props) {
  const desktopBig = 2;
  const desktopSmall = 4;

  const mobileBig = 4;
  const mobileSmall = 6;

  return (
    <div className={props.className}>
      <TextStyled
        text={"INDIVIDUELL, FAMILIE, OG ARBEIDSPLASS"}
        size={desktopSmall}
        sizeMobile={mobileSmall}
      />
      <TextStyled
        className={"my-5"}
        text={"Atferdspsykologi psyko-, kropps og relasjonsterapi"}
        size={desktopBig}
        sizeMobile={mobileBig}
        textWeight={"bold"}
        highlightPosStart={1}
        highlightPosEnd={4}
        highlightColor={standardColors.green1}
      />
      <TextStyled
        text={"I OSLO OG LILLESTRØM"}
        size={desktopSmall}
        sizeMobile={mobileSmall}
      />
    </div>
  );
}

function Columns(props) {
  return (
    <div className={props.className + " columns is-centered "}>
      <div className={" column is-5 mx-5"}>
        <CenterStyled content={<ColumnTextHeadlineStyled />} />
      </div>
      <div className={" column is-5 mx-5"}>
        <CenterStyled
          content={
            <BorderImageStyled
              src={require("../../../../public/images/ex01.jpg")}
              alt={"Example image 1"}
              width={"400px"}
              padding={"1em"}
              offsetY={"1em"}
              offsetX={"-4em"}
            />
          }
        />
      </div>
    </div>
  );
}

export { Columns, ColumnTextHeadline };
