import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getProduct } from "../common/requests";

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios(getProduct(productId));
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);

  return (
    <div>
      Product {productId}
      {product && (
        <div>
          <li>{product.title}</li>
          <li>{product.image}</li>
          <li>{product.price}</li>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
