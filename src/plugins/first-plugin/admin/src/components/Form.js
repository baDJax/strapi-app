import { Box, Button, TextInput } from "@strapi/design-system";
import { useState } from "react";

const Form = ({ handleStatus }) => {
  const [userInput, setUserInput] = useState({ url: "", authentication: "" });
  const handleClick = () => {
    if (userInput.url && userInput.authentication) {
      fetch("http://localhost:1337/api/user-input", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: userInput }),
      }).then((response) => handleStatus(response.status));
      setUserInput({ url: "", authentication: "" });
    } else {
      try {
        handleStatus(0);
        throw new Error("Field is empty");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Box>
      <form>
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
