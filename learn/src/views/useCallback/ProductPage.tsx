import { useCallback } from "react";
import ShippingForm from "./ShippingForm";

export default function ProductPage({
  productId,
  referrer,
  theme,
}: {
  productId: number;
  referrer: string;
  theme: string;
}) {
  const handleSubmit = useCallback(
    (orderDetails: any) => {
      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer]
  );

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

function post(url: string, data: any) {
  // Imagine this sends a request...
  console.log("POST /" + url);
  console.log(data);
}
