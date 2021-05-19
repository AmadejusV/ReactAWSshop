import React from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  let { productId } = useParams();

  return <div>Product {productId}</div>;
}

export default ProductPage;
