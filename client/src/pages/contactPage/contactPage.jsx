import React from "react";
import { PageLayout } from "../../components/containers/pageLayout/pageLayout";

export function ContactPage(props) {
  return (
    <PageLayout className={props.className} content={<>Hello contact</>} />
  );
}
