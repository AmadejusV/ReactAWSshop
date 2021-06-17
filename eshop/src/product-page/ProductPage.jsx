import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { addToCart, getProduct } from "../common/requests";
import Card from "../common/components/Card";
import Counter from "../common/components/Counter";
import Button from "../common/components/Button";

import Spinner from "../common/components/Spinner";
import useCounter from "../common/hooks/useCounter";

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const counterProps = useCounter();
  const [isAddToCartLoading, setIsAddToCartLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      const { data } = await axios(getProduct(productId));
      setIsLoading(false);
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);

  async function handleAddToCartClick() {
    setIsAddToCartLoading(true);
    console.log(`adding ${counterProps.count} products to cart`);
    await axios(addToCart(product.id, counterProps.count));
    setIsAddToCartLoading(false);
  }

  if (isLoading) {
    return <Spinner text="Fetching product info" />;
  }

  return (
    <div className="flex m-auto px-2" style={{ maxWidth: 1000 }}>
      <div className="pr-4 max-w-1/2">
        <Card>
          <img src={product?.image} alt={product?.image} />
        </Card>
      </div>
      <div className="pl-4 max-w-1/2">
        <h1 className="text-2xl mb-4">{product?.title}</h1>
        <div className="text-3xl mb-4 font-bold">${product?.price}</div>
        <p className="mb-4">{product?.description}</p>
        <div className="mb-2 font-semibold">Quantity</div>
        <Counter className="mb-4" {...counterProps} />{" "}
        {/*passing in counterPross while destructuring them */}
        <Button
          onClick={handleAddToCartClick}
          type="primary"
          className="ml-2 focus:outline-none"
          disabled={isAddToCartLoading}
        >
          {isAddToCartLoading ? "ADDING TO CART" : "ADD TO CART"}
        </Button>
      </div>
    </div>
  );
}

export default ProductPage;
