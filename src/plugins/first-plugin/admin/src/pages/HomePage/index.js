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
  const [isValid, setIsValid] = useState(false);
  const [count, setCount] = useState(0);
  
  const handleValid = (val) => {
    setIsValid(val);
  };
  const fetchCount = (c) => {
    setCount(c);
  };
  return (
    <Box padding={0} background="neutral100">
      <BaseHeaderLayout
        primaryAction={<FetchBtn count={count} isValid={isValid} />}
        title="Trigger a deploy"
        as="h2"
      />
      <Box padding={0} paddingLeft={10} paddingRight={10}>
        <Form fetchCount={fetchCount} handleValid={handleValid} />
      </Box>
    </Box>
  );
};

export default HomePage;
