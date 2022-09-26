import React from "react";
import { Text } from "../text/text";

export function Button(props) {
  return (
    <button className={props.className}>
      <Text text={props.text} size={props.textSize} />
    </button>
  );
}
