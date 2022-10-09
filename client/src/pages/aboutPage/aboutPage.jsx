import { PageLayout } from "../../components/containers/pageLayout/pageLayout";
import React from "react";
import { AboutSectionOne } from "../../components/containers/aboutPage/section1/aboutSectionOne";

function AboutPage() {
  return (
    <PageLayout>
      <AboutSectionOne />
    </PageLayout>
  );
}

export { AboutPage };
