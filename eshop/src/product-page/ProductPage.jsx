import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const product = await response.json();
      setProduct(product);
    };
    getProduct();
  }, []);

  console.log(product);

  return (
    <div>
      Product {productId}
      {/* <li>{title}</li>
      <li>{image}</li>
      <li>{price}</li> */}
    </div>
  );
}

export default ProductPage;
