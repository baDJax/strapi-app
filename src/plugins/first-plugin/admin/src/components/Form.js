import { Box, Button, TextInput } from "@strapi/design-system";
import { useEffect, useState } from "react";

const Form = ({ handleStatus, handleValid }) => {
  const [userInput, setUserInput] = useState({ url: "", authentication: "" });
  const [typeChange, setTypeChange] = useState(true);
  const [inputError, setInputError] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => handleValid(isValid), [isValid]);

  const handleClick = () => {
    if (userInput.url.trim() && userInput.authentication.trim()) {
      fetch("http://localhost:1337/api/user-input", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: userInput }),
      }).then((response) => handleStatus(response.status));
      setTypeChange(false);
      setInputError(false);
      setIsValid(true);
    } else {
      try {
        handleStatus(0);
        throw new Error("Field is empty");
      } catch (error) {
        console.log(error);
        setTypeChange(true);
        setInputError(true);
        setIsValid(false);
      }
    }
  };
  return (
    <Box>
      <form>
        <TextInput
          placeholder="Enter the webhook url"
          error={inputError ? "Please enter a webhook url" : undefined}
          type="text"
          label="Enter the URL"
          name="inputUrl"
          onChange={(e) => setUserInput({ ...userInput, url: e.target.value })}
          value={userInput.url}
        />
        <br />
        <TextInput
          type={typeChange ? "text" : "password"}
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
