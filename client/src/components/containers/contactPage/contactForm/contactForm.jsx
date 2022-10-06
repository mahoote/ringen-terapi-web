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
import {
  ContactFormContentStyled,
  FormInputsStyled,
} from "./contactForm.style";
import { TextAreaInput } from "../../../input/textarea/textAreaInput";
import { ButtonStyled } from "../../../button/button.style";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../loader/loader";

function Heading() {
  return (
    <div className={"has-text-centered"}>
      <TextStyled
        text={data.contactPage.contactForm.line1.text}
        sizeDesktop={desktopBig}
        sizeTablet={tabletBig}
        sizeMobile={mobileBig}
        textWeight={"bold"}
      />
      <TextStyled
        className={"my-4"}
        text={data.contactPage.contactForm.line2.text}
        sizeDesktop={desktopSmall}
        sizeTablet={tabletSmall}
        sizeMobile={mobileSmall}
      />
    </div>
  );
}

function FormInput(props) {
  const required = props.value.required;
  const requiredString = required ? " *" : "";
  const sizeString = `is-${props.value.size}` || "is-12";

  const type = props.value.type;

  if (type === "textarea") {
    return (
      <TextAreaInput
        className={" column " + sizeString}
        required={required}
        placeholder={props.value.text + requiredString}
      />
    );
  }

  return (
    <TextInput
      className={" column " + sizeString}
      type={type}
      required={required}
      placeholder={props.value.text + requiredString}
    />
  );
}

function FormInputs(props) {
  const navigate = useNavigate();
  const formValues = data.contactPage.contactForm.formValues;

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Send");
    navigate("/");
  }

  return (
    <form
      className={
        props.className + " columns is-centered is-multiline has-text-centered "
      }
      onSubmit={handleSubmit}
    >
      {formValues.map((value, i) => (
        <FormInput key={i} value={value} />
      ))}
      <ButtonStyled
        className={"py-4 px-6"}
        text={"Send"}
        borderWidth={"2.2px"}
        textSize={3}
        textSizeTouch={5}
      />
    </form>
  );
}

function ContactFormContent(props) {
  return (
    <Loader
      content={
        <CenterStyled
          className={props.className}
          content={
            <div className={"my-6"}>
              <Heading />
              <FormInputsStyled />
            </div>
          }
        />
      }
    />
  );
}

function ContactForm(props) {
  return (
    <div className={props.className}>
      <ContactFormContentStyled />
    </div>
  );
}

export { ContactForm, ContactFormContent, FormInputs };
