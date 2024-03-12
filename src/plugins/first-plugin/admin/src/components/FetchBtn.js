import { Rocket } from "@strapi/icons";
import {
  Button,
  ModalLayout,
  ModalBody,
  ModalHeader,
  Typography,
} from "@strapi/design-system";
import { useEffect, useState } from "react";

const FetchBtn = ({ status, isValid }) => {
  const [isClicked, setIsClicked] = useState(false);

  

  const handleClick = () => {
    setIsClicked(!isClicked);
  };


  return (
    <>
      <Button disabled={isValid ? false : true} variant={isValid ? 'primary':''} onClick={handleClick} startIcon={<Rocket />}>
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
