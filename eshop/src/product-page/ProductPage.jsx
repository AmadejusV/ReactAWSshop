import React from "react";
import { useLocation, useParams } from "react-router-dom";

function ProductPage() {
  let { productId } = useParams();
  const location = useLocation();
  const { image, title, price } = location.state;

  return (
    <div>
      Product {productId}
      <li>{title}</li>
      <li>{image}</li>
      <li>{price}</li>
    </div>
  );
}

export default ProductPage;
