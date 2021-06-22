import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
import { addToCart, getProduct } from "../common/requests";
import Card from "../common/components/Card";
import Counter from "../common/components/Counter";
import AddToCartButton from "./components/AddToCartButton";

import Spinner from "../common/components/Spinner";
import useCounter from "../common/hooks/useCounter";
import useApi from "../common/hooks/useApi";

function ProductPage() {
  const { productId } = useParams();
  const counterProps = useCounter();
  const {data: product, isLoading, call} = useApi();
  const {isLoading: isAddToCartLoading, call: callAddToCart} = useApi();


  useEffect(()=>{
    call(getProduct(productId));
  },[]) //eslint-disable-line

  async function handleAddToCartClick() {
    callAddToCart(addToCart, counterProps.count);
  }

  if (isLoading || !product) {
    return <Spinner text="Fetching product info" />;
  }

  return (
    <div className="flex m-auto px-2" style={{ maxWidth: 1000 }}>
      <div className="pr-4 max-w-1/2">
        <Card>
          <img src={product?.image} alt={product?.image} /> {/*eslint-disable-line*/}
        </Card>
      </div>
      <div className="pl-4 max-w-1/2">
        <h1 className="text-2xl mb-4">{product?.title}</h1>
        <div className="text-3xl mb-4 font-bold">${product?.price}</div>
        <p className="mb-4">{product?.description}</p>
        <div className="mb-2 font-semibold">Quantity</div>
        <Counter className="mb-4" {...counterProps} />{" "}
        <AddToCartButton isLoading={isAddToCartLoading} onClick={handleAddToCartClick} />
      </div>
    </div>
  );
}

export default ProductPage;
