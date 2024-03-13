import { Rocket } from "@strapi/icons";
import {
  Button,
  ModalLayout,
  ModalBody,
  ModalHeader,
  Typography,
} from "@strapi/design-system";
import { useEffect, useState } from "react";

const FetchBtn = ({ isValid, count }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [webhookData, setWebhookData] = useState([]);
  const [status, setStatus] = useState(0);

  const fetchData = () => {
    fetch("http://localhost:1337/api/user-input")
      .then((res) => res.json())
      .then((data) => setWebhookData(data));
  };

  const post = async () => {
    try {
      const response = await fetch(webhookData.data.attributes.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: webhookData.data.attributes.authentication,
        },
        body: JSON.stringify({
          data: "This is a placeholder data",
        }),
      });
      setStatus(response.status);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    post();
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  return (
    <>
      <Button
        disabled={isValid ? false : true}
        variant={isValid ? "primary" : ""}
        onClick={handleClick}
        startIcon={<Rocket />}
      >
        Deploy
      </Button>
      {isClicked && (
        <ModalLayout
          onClose={() => setIsClicked((prev) => !prev)}
          labelledBy="title"
        >
          <ModalHeader>
            <Typography
              fontWeight="bold"
              textColor="neutral800"
              as="h2"
              id="title"
            >
              Deploy Status
            </Typography>
          </ModalHeader>
          <ModalBody>
            {isClicked
              ? status
                ? `Status Code: ${status}`
                : "Webhook URL missing"
              : ""}
          </ModalBody>
        </ModalLayout>
      )}
    </>
  );
};
export default FetchBtn;
