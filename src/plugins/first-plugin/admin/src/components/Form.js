import { Box, Button, TextInput } from "@strapi/design-system";
import { useState } from "react";

const Form = () => {
  const [userInput, setUserInput] = useState({ url: "", authentication: "" });
  const handleClick = () => {
    console.log(userInput);
  };
  return (
    <Box>
      <form action="get">
        <TextInput
          placeholder="Enter the webhook url"
          label="Enter the URL"
          name="inputUrl"
          onChange={(e) => setUserInput({ ...userInput, url: e.target.value })}
          value={userInput.url}
        />
        <br />
        <TextInput
          placeholder="Authentication"
          label="Authentication"
          name="authentication"
          onChange={(e) =>
            setUserInput({ ...userInput, authentication: e.target.value })
          }
          value={userInput.authentication}
        />
        <br />
        <Box>
          <Button onClick={handleClick} variant="success" key="success">
            Save Webhook URL
          </Button>
        </Box>
      </form>
    </Box>
  );
};
export default Form;
