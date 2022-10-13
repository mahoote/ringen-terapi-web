import React from "react";
import { PageLayout } from "../../components/containers/pageLayout/pageLayout";
import { ServicesSectionOne } from "../../components/containers/servicesPage/section01/servicesSectionOne";

function ServicesPage() {
  return (
    <PageLayout>
      <ServicesSectionOne className={"mb-6"} />
    </PageLayout>
  );
}

export { ServicesPage };
