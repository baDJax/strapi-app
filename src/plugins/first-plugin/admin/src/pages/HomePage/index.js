/*
 *
 * HomePage
 *
 */

import React, { useState } from "react";
import { BaseHeaderLayout, Box } from "@strapi/design-system";
import FetchBtn from "../../components/FetchBtn";
import Form from "../../components/Form";

const HomePage = () => {
  const [status, setStatus] = useState(0);
  const handleStatus = (sta) => {
    setStatus(sta)
  }
  return (
    <Box padding={0} background="neutral100">
      <BaseHeaderLayout
        primaryAction={<FetchBtn status={status} />}
        title="Trigger a deploy"
        as="h2"
      />
      <Box padding={0} paddingLeft={10} paddingRight={10}>
        <Form handleStatus={handleStatus} />
      </Box>
    </Box>
  );
};

export default HomePage;
