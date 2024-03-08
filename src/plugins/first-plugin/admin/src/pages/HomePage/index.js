/*
 *
 * HomePage
 *
 */

import React from "react";
import { BaseHeaderLayout, Box } from "@strapi/design-system";
import FetchBtn from "../../components/FetchBtn";

const HomePage = () => {
  return (
    <Box background="neutral100">
      <BaseHeaderLayout
        primaryAction={<FetchBtn />}
        title="Trigger a deploy on the Jenkins"
        as="h2"
      />
    </Box>
  );
};

export default HomePage;
