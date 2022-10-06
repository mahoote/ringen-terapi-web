import React from "react";
import { TextAreaInputTagStyled } from "./textAreaInput.style";
import TextareaAutosize from "react-textarea-autosize";

function TextAreaInputTag(props) {
  return (
    <TextareaAutosize
      minRows={4}
      className={props.className + " is-size-4-tablet is-size-5-mobile p-5 "}
      placeholder={props.placeholder}
    />
  );
}

function TextAreaInput(props) {
  return (
    <div className={props.className + " my-4 "}>
      <TextAreaInputTagStyled placeholder={props.placeholder} />
    </div>
  );
}

export { TextAreaInput, TextAreaInputTag };
