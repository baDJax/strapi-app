import { Box, Button, TextInput } from "@strapi/design-system";
import { useEffect, useState } from "react";

const Form = ({ handleValid, fetchCount }) => {
  const [userInput, setUserInput] = useState({ url: "", authentication: "" });
  const [typeChange, setTypeChange] = useState(true);
  const [inputError, setInputError] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    handleValid(isValid);
    fetchCount(count);
  }, [isValid, count]);

  const handleClick = () => {
    if (userInput.url.trim()) {
      fetch("/api/deploy", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: userInput }),
      });
      setTypeChange(false);
      setInputError(false);
      setIsValid(true);
      setCount(count + 1);
    } else {
      try {
        setTypeChange(true);
        setInputError(true);
        setIsValid(false);
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
          required
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
