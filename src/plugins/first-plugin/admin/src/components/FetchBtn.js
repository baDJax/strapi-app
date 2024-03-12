import { Rocket } from "@strapi/icons";
import {
  Button,
  ModalLayout,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Typography,
  Box,
} from "@strapi/design-system";
import { useEffect, useState } from "react";

const FetchBtn = ({ status }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [webhookData, setWebhookData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:1337/api/user-datas");
      const data = await response.json();
      setWebhookData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    if (isClicked) {
      fetchData();
    }
  }, [isClicked]);

  return (
    <>
      <Button onClick={handleClick} variant="primary" startIcon={<Rocket />}>
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
                : "No request sent"
              : ""}
          </ModalBody>
        </ModalLayout>
      )}
    </>
  );
};
export default FetchBtn;
