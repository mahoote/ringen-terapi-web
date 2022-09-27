import React from "react";
import { useTextWeight } from "../../hooks/text";
import { TextContentSpanStyled, TextLinkStyled } from "./text.style";
import { Link } from "react-router-dom";

function TextContentSpan(props) {
  const textWeight = useTextWeight(props.highlightTextWeight);
  return (
    <span className={props.className + textWeight}>
      {props.content.split("<br/>").join("\n")}
    </span>
  );
}

function TextHighlight(props) {
  const highlightPosStart = props.highlightPosStart;
  const highlightPosEnd = props.highlightPosEnd;
  const words = props.text.split(" ");

  const beforeArray = words.slice(0, highlightPosStart);
  const spanArray = words.slice(highlightPosStart, highlightPosEnd + 1);
  const afterArray = words.slice(highlightPosEnd + 1);

  return (
    <>
      {beforeArray.join(" ").split("<br/>").join("\n")}
      <TextContentSpanStyled
        {...props}
        className={""}
        content={" " + spanArray.join(" ") + " "}
      />
      {afterArray.join(" ").split("<br/>").join("\n")}
    </>
  );
}

function TextLink(props) {
  const { className, to } = props;

  if (to.toString().startsWith("http") || to.toString().startsWith("www")) {
    return (
      <a href={to} target={"_blank"} className={className}>
        {props.TextContent}
      </a>
    );
  }

  return (
    <Link to={to} className={className}>
      {props.TextContent}
    </Link>
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

  const linkTo = props.linkTo || null;

  function TextContent() {
    return hasHighlight ? (
      <TextHighlight
        {...props}
        className={""}
        highlightPosStart={highlightPosStart}
        highlightPosEnd={highlightPosEnd}
      />
    ) : (
      props.text.split("<br/>").join("\n")
    );
  }

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
      {linkTo ? (
        <TextLinkStyled to={linkTo} TextContent={<TextContent />} />
      ) : (
        <TextContent />
      )}
    </p>
  );
}

export { Text, TextContentSpan, TextLink };
