import { Button } from "@strapi/design-system";
import { Rocket } from "@strapi/icons";

const FetchBtn = () => {
  const handleClick = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Button onClick={handleClick} variant="primary" startIcon={<Rocket />}>
      Deploy
    </Button>
  );
};
export default FetchBtn;
