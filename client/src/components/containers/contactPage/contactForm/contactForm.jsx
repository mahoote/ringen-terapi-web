import { TextStyled } from "../../../text/text.style";
import data from "../../../../../public/data.json";
import {
  desktopBig,
  desktopSmall,
  mobileBig,
  mobileSmall,
  tabletBig,
  tabletSmall,
} from "../../../globals/fontSizes";
import React from "react";
import { CenterStyled } from "../../center/center.style";
import { TextInput } from "../../../input/text/textInput";
import { FormInputsStyled } from "./contactForm.style";
import { TextAreaInput } from "../../../input/textarea/textAreaInput";

function Heading() {
  return (
    <div className={"has-text-centered mb-4"}>
      <TextStyled
        className={"my-4"}
        text={data.contactPage.contactForm.line1.text}
        sizeDesktop={desktopBig}
        sizeTablet={tabletBig}
        sizeMobile={mobileBig}
        textWeight={"bold"}
      />
      <TextStyled
        text={data.contactPage.contactForm.line2.text}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />
    </div>
  );
}

function FormInput(props) {
  const mandatoryString = props.value.mandatory ? " *" : "";
  const sizeString = `is-${props.value.size}` || "is-12";

  const type = props.value.type;

  if (type === "textarea") {
    return (
      <TextAreaInput
        className={" column " + sizeString}
        placeholder={props.value.text + mandatoryString}
      />
    );
  }

  return (
    <TextInput
      className={" column " + sizeString}
      type={type}
      placeholder={props.value.text + mandatoryString}
    />
  );
}

function FormInputs(props) {
  const formValues = data.contactPage.contactForm.formValues;

  return (
    <div className={props.className + " columns is-centered is-multiline "}>
      {formValues.map((value, i) => (
        <FormInput key={i} value={value} />
      ))}
    </div>
  );
}

function ContactForm(props) {
  return (
    <CenterStyled
      className={props.className}
      content={
        <div className={"my-6"}>
          <Heading />
          <FormInputsStyled />
        </div>
      }
    />
  );
}

export { ContactForm, FormInputs };
