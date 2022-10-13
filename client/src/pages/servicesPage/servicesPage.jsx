import React from "react";
import { PageLayout } from "../../components/containers/pageLayout/pageLayout";
import { ServicesSectionOne } from "../../components/containers/servicesPage/section01/servicesSectionOne";

function ServicesPage() {
  return (
    <PageLayout>
      <ServicesSectionOne />
    </PageLayout>
  );
}

export { ServicesPage };
