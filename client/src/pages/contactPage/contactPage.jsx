import React from "react";
import { PageLayout } from "../../components/containers/pageLayout/pageLayout";
import { ContactFormStyled } from "../../components/containers/contactPage/contactForm/contactForm.style";

export function ContactPage(props) {
  return (
    <PageLayout
      className={props.className}
      content={
        <div className={"columns is-centered is-multiline my-6"}>
          <ContactFormStyled className={"column is-6-desktop mx-5"} />
        </div>
      }
    />
  );
}
