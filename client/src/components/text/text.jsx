import React from "react";
import { useTextWeight } from "../../hooks/text";
import { TextContentSpanStyled } from "./text.style";

function TextContentSpan(props) {
  const textWeight = useTextWeight(props.highlightTextWeight);
  return <span className={props.className + textWeight}>{props.content}</span>;
}

function TextHighlight(props) {
  const highlightPosStart = props.highlightPosStart;
  const highlightPosEnd = props.highlightPosEnd;
  const words = props.text.split(" ");

  const beforeArray = words.slice(0, highlightPosStart);
  const spanArray = words.slice(highlightPosStart, highlightPosEnd + 1);
  const afterArray = words.slice(highlightPosEnd + 1);

  console.log(beforeArray);

  return (
    <>
      {beforeArray.join(" ")}
      <TextContentSpanStyled
        {...props}
        className={""}
        content={" " + spanArray.join(" ") + " "}
      />
      {afterArray.join(" ")}
    </>
  );
}

function Text(props) {
  const size = props.size;
  const sizeDesktop = props.sizeDesktop;
  const sizeTouch = props.sizeTouch;
  const sizeTablet = props.sizeTablet;
  const sizeMobile = props.sizeMobile;

  const sizeClass = ` is-size-${size} `;
  const sizeDesktopClass =
    sizeDesktop !== undefined ? ` is-size-${sizeDesktop}-desktop ` : "";
  const sizeTouchClass =
    sizeTouch !== undefined ? ` is-size-${sizeTouch}-touch ` : "";
  const sizeTabletClass =
    sizeTablet !== undefined ? ` is-size-${sizeTablet}-tablet ` : "";
  const sizeMobileClass =
    sizeMobile !== undefined ? ` is-size-${sizeMobile}-mobile ` : "";

  const textWeight = useTextWeight(props.textWeight);

  const highlightPosStart = props.highlightPosStart;
  const highlightPosEnd = props.highlightPosEnd;

  const hasHighlight =
    highlightPosStart !== undefined &&
    highlightPosEnd !== undefined &&
    highlightPosStart !== -1 &&
    highlightPosEnd !== -1;

  return (
    <p
      className={
        props.className +
        sizeClass +
        sizeDesktopClass +
        sizeTouchClass +
        sizeTabletClass +
        sizeMobileClass +
        textWeight
      }
    >
      {hasHighlight ? (
        <TextHighlight
          {...props}
          className={""}
          highlightPosStart={highlightPosStart}
          highlightPosEnd={highlightPosEnd}
        />
      ) : (
        props.text
      )}
    </p>
  );
}

export { Text, TextContentSpan };
