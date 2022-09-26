import React from "react";

export function Button(props) {
  return (
    <button className={props.className + " button "}>{props.value}</button>
  );
}
