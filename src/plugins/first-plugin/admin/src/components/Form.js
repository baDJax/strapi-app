import { Box, TextInput } from "@strapi/design-system";
import { Information } from "@strapi/icons";
import { useState } from "react";

const Form = () => {
  const [inputUrl, setInputUrl] = useState({ url: "" });
  const handleChange = (e) => {
    setInputUrl({ ...inputUrl, url: e.target.value });
  };
  return (
    <Box>
      <TextInput
        placeholder="This is a inputUrl placeholder"
        label="Enter the URL"
        name="inputUrl"
        onChange={handleChange}
        value={inputUrl.url}
      />
    </Box>
  );
};
export default Form;
