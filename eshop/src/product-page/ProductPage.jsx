import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getProduct } from "../common/requests";
import Card from "../common/components/Card";
import Counter from "../common/components/Counter";
import Button from "../common/components/Button";

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      const { data } = await axios(getProduct(productId));
      setIsLoading(false);
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);

  if (isLoading) {
    return <div>LOADING!</div>;
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
        <div className="text-3xl mb-4 font-bold">{product?.price}$</div>
        <p className="mb-4">{product?.description}</p>
        <div className="mb-2 font-semibold">Quantity</div>
        <Counter />
        <Button className="ml-2 focus:outline-none">Add to cart</Button>
      </div>
    </div>
  );
}

export default ProductPage;
