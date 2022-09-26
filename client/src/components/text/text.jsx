import React from "react";
import { useTextWeight } from "../../hooks/text";

function Text(props) {
  const size = props.size;
  const sizeTouch = props.sizeTouch;
  const sizeTablet = props.sizeTablet;
  const sizeMobile = props.sizeMobile;

  const sizeClass = ` is-size-${size} `;
  const sizeTouchClass =
    sizeTouch !== undefined ? ` is-size-${sizeTouch}-touch ` : "";
  const sizeTabletClass =
    sizeTablet !== undefined ? ` is-size-${sizeTablet}-tablet ` : "";
  const sizeMobileClass =
    sizeMobile !== undefined ? ` is-size-${sizeMobile}-mobile ` : "";

  const textWeight = useTextWeight(props.textWeight);

  return (
    <p
      className={
        props.className +
        sizeClass +
        sizeTouchClass +
        sizeTabletClass +
        sizeMobileClass +
        textWeight
      }
    >
      {props.text}
    </p>
  );
}

export { Text };
