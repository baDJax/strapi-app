/*
 *
 * HomePage
 *
 */

import React from "react";
import { BaseHeaderLayout, Box } from "@strapi/design-system";
import FetchBtn from "../../components/FetchBtn";
import Form from "../../components/Form";

const HomePage = () => {
  return (
    <Box background="neutral100">
      <BaseHeaderLayout
        primaryAction={<FetchBtn />}
        title="Trigger a deploy on the Jenkins"
        as="h2"
      />
      <Form />
    </Box>
  );
};

export default HomePage;
